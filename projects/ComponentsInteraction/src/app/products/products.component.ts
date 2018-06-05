import { Component, OnInit } from '@angular/core';
import { ProductsDataService} from '../products-data.service'

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
  products = []

  constructor( private _products:ProductsDataService) { }

  ngOnInit() {
    this.products = this._products.getProducts()
  }

  prdDelete(product){
    console.log("Deleting product: ", JSON.stringify(product))
  }

}
