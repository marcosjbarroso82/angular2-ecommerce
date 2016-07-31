import { PRODUCTS }               from './mock-products';
import { Injectable }           from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Product } from './product';

@Injectable()
export class ProductService {
  constructor(public http: Http) { }

  getProducts() {
    return this.http.get('http://localhost:8000/api/products/');
  }

  getProduct(id: number) {
    return this.http.get('http://localhost:8000/api/products/' + id + '/');
  }

  createProduct(product: Product) {
    let body = JSON.stringify(product);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/api/products/', body, options);
  }
}
