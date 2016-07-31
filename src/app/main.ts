import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';
import { Http, HTTP_PROVIDERS } from '@angular/http';

import { ProductService } from './product/product.service';
import { CartService } from './cart/cart.service';

bootstrap(AppComponent, [ 
    HTTP_PROVIDERS,
    
    APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    CartService,
    ProductService
]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);
