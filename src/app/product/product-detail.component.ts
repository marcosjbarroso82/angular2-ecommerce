import { Component, Input, OnInit } from '@angular/core';
//import { RouteParams } from '@angular/router-deprecated';
import { Router, ActivatedRoute }       from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'product-detail',
  templateUrl: '/app/product/templates/product-detail.component.html',
  
  styleUrls: ['/app/product/css/product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  private sub: any;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) {
  }

  ngOnInit() {
    console.log('ProductDetailComponent ngOnInit ');

    this.sub = this._route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
       this._productService.getProduct(id)
      .subscribe(response => this.product = response.json());
       
       //this.service.getHero(id).then(hero => this.hero = hero);
     });
    
    /*
    let id = +this._routeParams.get('id');
    console.log("id: " + id)
    this._productService.getProduct(id)
      .subscribe(response => this.product = response.json());
      */
  }

  goBack() {
    window.history.back();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

/*
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
       this.service.getHero(id).then(hero => this.hero = hero);
     });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoHeroes() {
    let heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }
  */