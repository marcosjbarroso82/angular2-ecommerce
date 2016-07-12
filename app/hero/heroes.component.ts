import { Component }           from '@angular/core';
import { Router  }             from '@angular/router-deprecated';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Hero }                from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroCreateComponent } from './hero-create.component';
import { OnInit }              from '@angular/core';
import { HeroService }         from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: '/app/hero/templates/heroes.component.html',
  styleUrls:  ['/app/hero/css/heroes.component.css'],
  directives: [HeroDetailComponent, HeroCreateComponent],
  providers: [HTTP_PROVIDERS]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    public http: Http,
    private _router: Router,
    private _heroService: HeroService) { 
  }

  getHeroes() {
    this._heroService.getHeroes()
      .subscribe(response => this.heroes = response.json());
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoCreate() {
    this._router.navigate(['HeroCreate']);
  }

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
