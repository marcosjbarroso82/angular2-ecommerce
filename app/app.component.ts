import { Component, provide } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ProductService } from './product/product.service';
import { ProductsComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductCreateComponent } from './product/product-create.component';
import { APP_BASE_HREF } from '@angular/common'; // Checkear si esto es necesario


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Products']">Products</a>
    </nav>
    <router-outlet></router-outlet>  
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS, 
    provide(APP_BASE_HREF, { useValue: '/' }),
    ProductService
  ],
  styleUrls: ['app/app.component.css']
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
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
  title = 'Tour of Products';
  

 }











