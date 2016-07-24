import { Component }           from '@angular/core';
import { Router  }             from '@angular/router-deprecated';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Product }                from './product';
import { ProductDetailComponent } from './product-detail.component';
import { ProductCreateComponent } from './product-create.component';
import { OnInit }              from '@angular/core';
import { ProductService }         from './product.service';
import { CartService } from '../cart/cart.service';
import { Cart } from '../cart/cart';
import { CartItem } from '../cart/cart';

@Component({
  selector: 'product-list',
  templateUrl: '/app/product/templates/product.component.html',
  styleUrls:  ['/app/product/css/product.component.css'],
  directives: [ProductDetailComponent, ProductCreateComponent],
  providers: [HTTP_PROVIDERS]
})

export class ProductsComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(
    public http: Http,
    private _router: Router,
    private _productService: ProductService,
    private _cartService: CartService) { 
  }

  addToCart() {
    let item = new CartItem();
    item.quantity = 2;
    item.product = 1;
    this._cartService.addItem(item);    
  }

  getProducts() {
    this._productService.getProducts()
      .subscribe(response => this.products = response.json());
  }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product) {
    this.selectedProduct = product;
  }

  gotoCreate() {
    this._router.navigate(['ProductCreate']);
  }

  gotoDetail() {
    this._router.navigate(['ProductDetail', { id: this.selectedProduct.id }]);
  }
}
