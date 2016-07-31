import { Component, Input, OnInit } from '@angular/core';
//import { RouteParams } from '@angular/router-deprecated';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'product-create',
  templateUrl: '/app/product/templates/product-create.component.html',
  styleUrls: ['/app/product/css/product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product;

  constructor(
    private _productService: ProductService
    //private _routeParams: RouteParams
    ) {
  }

  ngOnInit() {
    this.product = new Product();
  }

  create() {
    this._productService.createProduct(this.product)
      .subscribe(response => this.product = response.json());
  }

  goBack() {
    window.history.back();
  }
}

