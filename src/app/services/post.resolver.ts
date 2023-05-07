import { ProductService } from '../services';
import { IPost, IProduct } from '../interfaces';
import { inject, Injectable } from '@angular/core';
import {
  Router, ResolveFn,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { PostService } from './post.service';


export const PostResolver: ResolveFn<IPost> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const id = route.params['id'];

  if(!id) {
    return of({} as IPost);
  }

  return inject(PostService).getOne(id).pipe(
    catchError(() => {
      inject(Router).navigate(['posts']);
      return EMPTY;
    })
  );
}