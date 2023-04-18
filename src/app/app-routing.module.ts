import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { canActivateCartGuard, canActivateLoginGuard, canActivateLogoutGuard } from './guards';
import { StoreComponent } from './components/store/store.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full'
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [canActivateCartGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [canActivateLoginGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [canActivateLogoutGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
