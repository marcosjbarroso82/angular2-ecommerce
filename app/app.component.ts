import { Component, provide } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ProductService } from './product/product.service';
import { ProductsComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductCreateComponent } from './product/product-create.component';

import { CartService } from './cart/cart.service';

import { APP_BASE_HREF } from '@angular/common'; // Checkear si esto es necesario


import {LoginComponent} from './login.component';
import {PrivateComponent} from './private.component';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Home']">Home</a>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Products']">Products</a>
    </nav>
    <div style="border: 1px solid black"><router-outlet></router-outlet></div>  
  `,
  directives: [LoginComponent, ROUTER_DIRECTIVES, ProductsComponent],
  providers: [
    ROUTER_PROVIDERS, 
    provide(APP_BASE_HREF, { useValue: '/' }),
    ProductService,
    CartService
  ],
  styleUrls: ['app/app.component.css']
})
@RouteConfig([
  { path: '/home', name: 'Home', component: PrivateComponent, useAsDefault:true },
    { path: '/login', name: 'Login', component: LoginComponent },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    //useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'ProductDetail',
    component: ProductDetailComponent
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsComponent
  },
  {
    path: '/create',
    name: 'ProductCreate',
    component: ProductCreateComponent
  },
  
])
export class AppComponent {
  title = 'Ecommerce';
  

 }











