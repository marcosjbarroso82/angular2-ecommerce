import { Injectable }           from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/concat';

//import {Observable} from 'rxjs/Rx';

import { Cart, CartItem } from './cart';

@Injectable()
export class CartService {

  items: CartItem[];


  constructor(public http: Http) {
    this.loadItems();
   }

   loadItems(): Observable<CartItem[]> {
     console.log("CartService loadItems");
     var user = JSON.parse(localStorage.getItem('user'));
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + user['token']
      });
      let options = new RequestOptions({ headers: headers });

     return this.http.get('http://localhost:8000/api/carts/my_cart/', options)
      .map(res => res.json()['items']);
   }

   removeItem(id): Observable<any> {
     console.log("CartService removeItem");
     var user = JSON.parse(localStorage.getItem('user'));
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + user['token']
      });
      let options = new RequestOptions({ headers: headers });

     return this.http.delete('http://localhost:8000/api/cart-items/' + id + '/', options);

   }


/*
  getCart() {
    var user = JSON.parse(localStorage.getItem('user'));
    let headers = new Headers({
       'Content-Type': 'application/json',
       'Authorization': 'JWT ' + user['token']
    });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.get('http://localhost:8000/api/carts/my_cart/', options)    
  }
*/
}
