import { Component, Input, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Cart } from './cart';
import { CartItem } from './cart';
import { CartService } from './cart.service';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/concat';

@Component({
  selector: 'cart-detail',
  templateUrl: '/app/cart/templates/cart-detail.component.html',
  styleUrls: ['/app/cart/css/cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  items$: Observable<CartItem[]>;

  constructor(
    private _cartService: CartService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    this.items$ = this._cartService.items$;
    this._cartService.loadItems();    
  }

  removeItem(id) {    
     this._cartService.removeItem(id);     
  }

  loadItems(){
    this._cartService.loadItems();    
  }

  json_representation(obj) {
    return JSON.stringify(obj);
  }

  goBack() {
    window.history.back();
  }
}

