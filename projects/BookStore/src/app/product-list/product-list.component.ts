import { Product } from './../../../../../.private/mystore/myStore/src/app/shared/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [
    {
      "name": "Apple",
      "price": "2.50"
    },
    {
      "name": "Orange",
      "price": "1.50"
    },
    {
      "name": "Banana",
      "price": "3.50"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
