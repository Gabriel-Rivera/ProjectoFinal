import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-register-article',
  templateUrl: './register-article.component.html',
  styleUrls: ['./register-article.component.css']
})
export class RegisterArticleComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/product-list/new`
  });

  constructor(private productS: ProductService, private route: Router) { }

  ngOnInit() {
  }

  submitForm(newForm) {
//console.log(newForm)
      //form es un objeto interno de la instancia FileUploader
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('title', newForm.value.title);
      form.append('desc', newForm.value.desc);
      form.append('price', newForm.value.price);
      form.append('category', newForm.value.category);
    };
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = () => this.route.navigate(['product-list']);
   }
  
}
