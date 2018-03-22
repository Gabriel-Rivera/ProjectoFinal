import { Component, OnInit } from '@angular/core';
import {SessionService} from '../services/session.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private session:SessionService) { }

  ngOnInit() {
  }

  // logout(){
  //   this.session.logout();
  //   localStorage.clear();
  //   location.reload();
  // }

}
