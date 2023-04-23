import { ProductService } from '../services';
import { IProduct } from '../interfaces';
import { inject, Injectable } from '@angular/core';
import {
  Router, ResolveFn,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';


export const ProductResolver: ResolveFn<IProduct> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const id = route.params['id'];

  if(!id) {
    return of({} as IProduct);
  }

  return inject(ProductService).getProduct(id).pipe(
    catchError(() => {
      inject(Router).navigate(['store']);
      return EMPTY;
    })
  );
}