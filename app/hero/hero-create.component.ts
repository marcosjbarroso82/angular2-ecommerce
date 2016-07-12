import { Component, Input, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-create',
  templateUrl: '/app/hero/templates/hero-create.component.html',
  styleUrls: ['/app/hero/css/hero-create.component.css']
})
export class HeroCreateComponent implements OnInit {
  hero: Hero;

  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    this.hero = new Hero();
  }

  create() {
    this._heroService.createHero(this.hero)
      .subscribe(response => this.hero = response.json());
  }

  goBack() {
    window.history.back();
  }
}

