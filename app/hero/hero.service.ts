import { HEROES }               from './mock-heroes';
import { Injectable }           from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  constructor(public http: Http) { }

  getHeroes() {
    return this.http.get('http://localhost:8000/api/heroes/');
  }

  getHero(id: number) {
    return this.http.get('http://localhost:8000/api/heroes/' + id + '/');
  }

  createHero(hero: Hero) {
    let body = JSON.stringify(hero);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/api/heroes/', body, options);


  }
}
