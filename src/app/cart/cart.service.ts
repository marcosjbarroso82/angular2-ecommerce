import { Injectable }           from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/concat';
import { Subject } from 'rxjs/Subject';

import { Cart, CartItem } from './cart';

@Injectable()
export class CartService {

  private _items$: Subject<CartItem[]>;
  private dataStore: {items: CartItem[]};

  constructor(public http: Http) {
    this.dataStore = { items: [] };
    this._items$ = <Subject<CartItem[]>>new Subject();    
   }

  get items$() {
    return this._items$.asObservable();
  }

  loadItems() {
    console.log("CartService loadItems");
    var user = JSON.parse(localStorage.getItem('user'));
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'JWT ' + user['token']});
    let options = new RequestOptions({ headers: headers });

    this.http.get('http://localhost:8000/api/carts/my_cart/', options)
    .map(res => res.json()['items'])
    .subscribe(
      data => {
        console.log(data);
        this.dataStore.items = data;
        this._items$.next(this.dataStore.items);
      },
      error => console.log("error at loading items")
    );
   }

   loadItem(id: any) {
    console.log("CartService loadItems");
    var user = JSON.parse(localStorage.getItem('user'));
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'JWT ' + user['token']});
    let options = new RequestOptions({ headers: headers });

    this.http.get(`http://localhost:8000/api/cart-items/${id}`, options)
    .map(response => response.json())
    .subscribe(data => {
      // Replace item if found
      let notFound = true;
      this.dataStore.items.forEach((item, index) => {
        if(item.id === data.id) {
          this.dataStore.items[index] = data;
          notFound = false;
        }
      });
      if (notFound) {
        this.dataStore.items.push(data);
      }
        
      this._items$.next(this.dataStore.items);
      }, error => console.log('Could not load item.')
    );
  }
     
     
  update(item: CartItem) {    
    console.log("CartService CartItem");
    var user = JSON.parse(localStorage.getItem('user'));
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'JWT ' + user['token']});
    let options = new RequestOptions({ headers: headers });
    this.http.put(`http://localhost:8000/api/cart-items/${item.id}`, JSON.stringify(item), options)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.items.forEach((item, i) => {
          if (item.id === data.id) { this.dataStore.items[i] = data; }
        });   
      this._items$.next(this.dataStore.items);
    }, error => console.log('Could not update item.'));
  }      

  removeItem(itemId) {
    console.log("CartService removeItem");
    var user = JSON.parse(localStorage.getItem('user'));
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'JWT ' + user['token']});
    let options = new RequestOptions({ headers: headers });
    this.http.delete(`http://localhost:8000/api/cart-items/${itemId}/`, options)
    .subscribe(response => {
      this.dataStore.items.forEach((t, i) => {
        if (t.id === itemId) { this.dataStore.items.splice(i, 1); }
      });
      this._items$.next(this.dataStore.items);
      }, error => console.log('Could not delete item.'));
  }


  addItem(item:CartItem) {
    console.log("CartService addItem");     
    var user = JSON.parse(localStorage.getItem('user'));
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'JWT ' + user['token']});
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:8000/api/cart-items/', JSON.stringify(item), options)
    .map(response => response.json())
    .subscribe(data => {
      this.dataStore.items.push(data);   
      this._items$.next(this.dataStore.items);
    }, error => console.log('Could not create item.'));
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
