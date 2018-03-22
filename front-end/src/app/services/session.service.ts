import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SessionService {
  constructor(private http:Http) { }


  BASE_URL = 'http://localhost:3000/api/auth';
  options={withCredentials:true}

  handleError(e) {
    return Observable.throw(e);
  }
  signup(formSignup){
    return this.http.post(`${this.BASE_URL}/signup`,formSignup, this.options)
      .map(res => res.json())
      .catch(err=>this.handleError(err))      
  }


  login(username,password) {
    console.log('entrando', username, password);
    return this.http.post(`${this.BASE_URL}/login`, {email:username,password:password}, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/logout`, {}, this.options)
      .map(res =>{
        localStorage.removeItem('user');
         res.json()
  })
  .catch(this.handleError);
  }
  
  isLoggedIn() {
    return this.http.get(`${this.BASE_URL}/loggedin`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getPrivateData() {
    return this.http.get(`/private`)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
