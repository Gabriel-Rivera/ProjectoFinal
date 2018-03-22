import { CanActivate } from '@angular/router';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs/Rx';
import { Http } from '@angular/http';

@Injectable()
export class EnterDetailsGuardService implements CanActivate {
  option= {withCredentials:true}
  constructor(private http:Http){

  }
  canActivate(): Observable<boolean>{
    return this.http.get('http://localhost:3000/api/auth/loggedin', this.option)
      .map(res => {
        if(res) return true
        else return false
      })
  }
}