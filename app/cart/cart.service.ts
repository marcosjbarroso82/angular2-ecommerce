import { Injectable }           from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Cart } from './cart';

@Injectable()
export class CartService {
  constructor(public http: Http) { }

  getCart() {
    var user = JSON.parse(localStorage.getItem('user'));
    let headers = new Headers({
       'Content-Type': 'application/json',
       'Authorization': 'JWT ' + user['token']
    });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.get('http://localhost:8000/api/carts/my_cart/', options)    
  }

}
