import { Injectable } from '@angular/core';
import { ICart, ICartItem } from '../interfaces';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CartService } from './cart.service';

@Injectable()
export class CartStateService {

  constructor(
  private _cartService: CartService
  ) {}
  
  #cartState$ = new BehaviorSubject<ICart | null>(null);

  cart$: Observable<ICart | null> = this.#cartState$.asObservable();

  addItem(item: ICartItem): Observable<ICart> {


    return this._cartService.addItem(item).pipe(tap((cart: ICart) => this.#cartState$.next(cart)));

  }

  removeItem(item: ICartItem): Observable<ICart> {

    return this._cartService.deleteItem(item).pipe(tap((cart: ICart) => this.#cartState$.next(cart)));

  }
  
  // setState(state: IUserState): void {
  //   this._cartService.
  // }
  
  clearState(): void {
    this.#cartState$.next(null);
  }

}
