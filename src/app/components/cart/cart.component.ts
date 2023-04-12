import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Observable, tap, exhaustMap, delay } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  obs$: Observable<any>;

  constructor(private _cartService: CartService) {}

  
}