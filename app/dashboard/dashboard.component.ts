import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router-deprecated';

import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { ProductsComponent } from '../product/product.component';

import { CartDetailComponent } from '../cart/cart-detail.component';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'my-dashboard',
  directives: [ProductsComponent, CartDetailComponent],
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private _router: Router,
    private _productService: ProductService) {
  }

  ngOnInit() {
    
    this._productService.getProducts()
      .subscribe(response => this.products = response.json());
  }

  gotoDetail(product: Product) {
    let link = ['ProductDetail', { id: product.id }];
    this._router.navigate(link);
  }
}
