import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { HttpModule} from '@angular/http';
import { FileSelectDirective } from 'ng2-file-upload';


//servicios
import {SessionService} from './services/session.service';
import { ProductService } from './services/product.service';


import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageInformationComponent } from './page-information/page-information.component';
import { RegisterArticleComponent } from './register-article/register-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProducteditComponent } from './productedit/productedit.component';

import { EnterDetailsGuardService } from './services/enterDetailGuard.service';
import { PaymentComponent } from './payment/payment.component'


const routes = [
  {path: '',component:LandingPageComponent},
  {path: 'product-list', component: ListProductComponent, canActivate: [ EnterDetailsGuardService ] },
  {path:'new-article', component:RegisterArticleComponent}, 
  {path:'detail-article/:id', component:DetailArticleComponent},
  {path: 'detail-article/:id/edit', component: ProducteditComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'payment', component:PaymentComponent}  
];


@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    LandingPageComponent,
    PageInformationComponent,
    RegisterArticleComponent,
   FileSelectDirective,
   DetailArticleComponent,
   LoginComponent,
   SignupComponent,
   ProducteditComponent,
   PaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService, SessionService,EnterDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
