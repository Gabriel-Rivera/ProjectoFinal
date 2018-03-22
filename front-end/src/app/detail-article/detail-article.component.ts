import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../services/product.service'

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  single:any;
  constructor(private activateRouter: ActivatedRoute, private productS: ProductService) { }

  ngOnInit() {
    this.activateRouter.params.subscribe(params => {
      this.productS.getSinglePhone(params['id'])
        .subscribe(singleProduct => this.single = singleProduct);
    });
  }

}
