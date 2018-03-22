import { Component } from '@angular/core';
import { SessionService } from './services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user;
constructor(private sessionS : SessionService,
private router:Router){}

ngOnInit(){
  this.user= JSON.parse(localStorage.getItem('user'));
  console.log(this.user);
}

logout(){
  localStorage.removeItem('user');
  this.user=null;
  this.router.navigate(['']);

//   this.sessionS.logout()
//     .subscribe(()=> console.log("te has deslogueado!"))
// }
}
}