import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router-deprecated';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private _router: Router,
    private _heroService: HeroService) {
  }

  ngOnInit() {
    
    this._heroService.getHeroes()
      .subscribe(response => this.heroes = response.json());
  }

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }
}
