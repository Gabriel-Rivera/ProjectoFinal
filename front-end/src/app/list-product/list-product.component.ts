import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  productList:Array<Object>
  constructor(private productS:ProductService,
  private session: SessionService) { }
 

  ngOnInit() {
    this.productS.getAllProducts()
    .subscribe(res=>this.productList=res)
    }

}
