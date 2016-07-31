import {Component} from '@angular/core';
import {AuthenticationService, User} from './authentication.service'

import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
//import { Router  } from '@angular/router-deprecated';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
        <div class="container" >
            <div class="title">
                Welcome
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.username" id="username" 
                            type="username" class="validate">
                        <label for="username">username</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.password" id="password" 
                            type="password" class="validate">
                        <label for="password">Password</label>
                    </div>
                </div>

                <span>{{errorMsg}}</span>
                <button (click)="login()" 
                    class="btn waves-effect waves-light" 
                    type="submit" name="action">Login</button>
            </div>
        </div>
    	`
})

export class LoginComponent {

    public user = new User('','');
    public errorMsg = '';

    constructor(
        public http: Http,
        private _router: Router,
        private _service:AuthenticationService) {}

    login() {
        // TODO: Most of this should got in login service

        let body = JSON.stringify(this.user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        this.http.post('http://localhost:8000/api/api-jwt-token-auth/', body, options)
        .subscribe(
            data => {
                console.log("success " + data);
                var response = data.json()
                this.user['token'] = response['token'];
                
                localStorage.setItem("user",JSON.stringify(this.user));
                this._router.navigate(['home']);    
            },
            error => {
                console.log("error " + error);
                this.errorMsg = 'Failed to login';
            });

        /*
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
        */
    }
}

