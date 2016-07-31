import {Injectable} from '@angular/core';
//import {Router} from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
//import { Router  } from '@angular/router-deprecated';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

export class User {
  constructor(
    public username: string,
    public password: string) { }
}

var users = [
  new User('admin@admin.com','adm9'),
  new User('user1@gmail.com','a23')
];

@Injectable()
export class AuthenticationService {

  constructor(
    public http: Http,
    //private _router: Router
    private route: ActivatedRoute,
    private _router: Router
    ){}

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }

  login(user){

    

    var authenticatedUser = users.find(u => u.username === user.email);
    if (authenticatedUser){
      //localStorage.setItem("user", authenticatedUser);
      localStorage.setItem("user",JSON.stringify(authenticatedUser));
      //this._router.navigate(['Home']);   
      this._router.navigate(['home']);   
      return true;
    }
    return false;

  }

   checkCredentials( ){
     console.log("checkCredentials");
    if (localStorage.getItem("user") === null){
        //this._router.navigate(['Login']);
        this._router.navigate(['login']);
    }
  } 
}
