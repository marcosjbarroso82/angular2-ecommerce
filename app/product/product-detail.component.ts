import { Component, Input, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'product-detail',
  templateUrl: '/app/product/templates/product-detail.component.html',
  styleUrls: ['/app/product/css/product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private _productService: ProductService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    console.log('ProductDetailComponent ngOnInit ');
    let id = +this._routeParams.get('id');
    console.log("id: " + id)
    this._productService.getProduct(id)
      .subscribe(response => this.product = response.json());
  }

  goBack() {
    window.history.back();
  }
}

