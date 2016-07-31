import { provideRouter, RouterConfig } from '@angular/router';

import { BasicFormComponent } from './basicForm/basicForm.component';
import { TemplateFormComponent } from './templateForm/templateForm.component';
import { ModelFormComponent } from './modelForm/modelForm.component';
import { PrivateComponent } from './private.component';
import {LoginComponent} from './login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductDetailComponent} from './product/product-detail.component';
import {ProductCreateComponent} from './product/product-create.component';




const APP_ROUTES: RouterConfig = [
  { path: '', pathMatch:'full', redirectTo: '/private' },
  { path: 'basicform',  component: BasicFormComponent },  
  { path: 'private',  component: PrivateComponent },
  { path: 'templateform',  component: TemplateFormComponent },
  { path: 'modelform',     component: ModelFormComponent    },

  { path: 'home', component: PrivateComponent},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'create', component: ProductCreateComponent },
  

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES)
];
