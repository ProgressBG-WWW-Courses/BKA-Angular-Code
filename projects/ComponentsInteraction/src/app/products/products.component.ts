import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <h2>Products Component</h2>
    <ul>
      <app-product *ngFor="let product of products" [productData]="product" (prdDeleteEvent)="prdDelete(product.name)"></app-product>
    </ul>  
  `,
  styleUrls: []
})
export class ProductsComponent implements OnInit {
  products = [
    {
      "name": "apples",
      "price": 2.50
    },
    {
      "name": "oranges",
      "price": 1.80
    },
    {
      "name": "bananas",
      "price": 2.00
    }
  ]

  constructor() { }
  ngOnInit() {}

  prdDelete(product){
    console.log("Deleting product: ", JSON.stringify(product))
  }

}
