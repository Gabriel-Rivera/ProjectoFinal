import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formInfo = {
    email: '',
    password: ''
  };
  constructor(
    private services: SessionService,
    private route:Router
  ) { }
  ngOnInit() {
  }

  sendForm() {
    console.log(this.formInfo)
    this.services.login(this.formInfo.email, this.formInfo.password)
      .subscribe(respuesta => this.route.navigate(['product-list']));
 }
}
