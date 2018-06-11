import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template:`    
    <section>
      <h2>Products Component</h2>
      <ul>
        <app-product 
          *ngFor="let product of products" 
          [productData]="product" 
          (productDelete)="productDelete(product.name)">
        </app-product>
      </ul>
      <hr>
      <app-add-product (addProductEvent)="addProduct($event)"></app-add-product>  
    </section>`,
  styleUrls: ['./products.component.css']
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

  productDelete(product){
    console.log("Deleting product: ", JSON.stringify(product))
  }

  addProduct(e){
    console.log(e);
    console.log("Product is going to be added")
  }
  

}
