import { Injectable }           from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Cart } from './cart';

@Injectable()
export class CartService {
  constructor(public http: Http) { }

  getCart() {
    return this.http.get('http://localhost:8000/api/carts/my_cart/');
  }

}
