import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { Http, HTTP_PROVIDERS } from '@angular/http';
//import {APP_BASE_HREF} from '@angular/common';

bootstrap(AppComponent, 
    [HTTP_PROVIDERS]);

