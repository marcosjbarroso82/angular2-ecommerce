import { Component, Input, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Cart } from './cart';
import { CartService } from './cart.service';

@Component({
  selector: 'cart-detail',
  templateUrl: '/app/cart/templates/cart-detail.component.html',
  styleUrls: ['/app/cart/css/cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  @Input() cart: Cart;

  constructor(
    private _cartService: CartService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    console.log('CartDetailComponent ngOnInit ');
    
    this._cartService.getCart()
      .subscribe(response => this.cart = response.json());
  }

  json_representatio(obj) {
    return JSON.stringify(obj);
  }

  goBack() {
    window.history.back();
  }
}

