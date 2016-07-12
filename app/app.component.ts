import { Component, provide } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HeroService } from './hero/hero.service';
import { HeroesComponent } from './hero/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroCreateComponent } from './hero/hero-create.component';
import { APP_BASE_HREF } from '@angular/common'; // Checkear si esto es necesario


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>  
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS, 
    provide(APP_BASE_HREF, { useValue: '/' }),
    HeroService
  ],
  styleUrls: ['app/app.component.css']
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/create',
    name: 'HeroCreate',
    component: HeroCreateComponent
  },
  
])
export class AppComponent {
  title = 'Tour of Heroes';
  

 }











