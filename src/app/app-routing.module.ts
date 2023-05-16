import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { canActivateCartGuard, canActivateLoginGuard, canActivateLogoutGuard } from './guards';
import { StoreComponent } from './components/store/store.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProductComponent } from './components/product/product.component';
import { ProductResolver } from './services/product.resolver';
import { RegisterComponent } from './components/register/register.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostResolver } from './services/post.resolver';
import { OrderComponent } from './components/order/order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { canActivateRoleGuard } from './guards/can-activate-role.guard';
import { AddproductComponent } from './components/addproduct/addproduct.component';

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
    path: 'products/add',
    component: AddproductComponent,
    canActivate: [canActivateLogoutGuard]
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [canActivateCartGuard]
  },
  {
    path: 'cart/add',
    component: CartComponent,
    canActivate: [canActivateCartGuard]
  },
  {
    path: 'cart/delete',
    component: CartComponent,
    canActivate: [canActivateCartGuard]
  },
  {
    path: 'order',
    component: OrderComponent,
    canActivate: [canActivateLogoutGuard]
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [canActivateLogoutGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [canActivateLoginGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [canActivateLoginGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [canActivateLogoutGuard]
  },
  {
    path: 'product/:id',
    pathMatch: 'full',
    component: ProductComponent,
    resolve: {product: ProductResolver}
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/add',
    component: AddpostComponent,
    canActivate: [canActivateLogoutGuard]
  },
  {
    path: 'posts/:id',
    pathMatch: 'full',
    component: PostComponent,
    resolve: {post: PostResolver}
  },
  {
    path: 'posts/delete/:id',
    pathMatch: 'full',
    component: PostComponent,
    resolve: {post: PostResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
