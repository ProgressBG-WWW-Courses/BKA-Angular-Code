import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-add-product',
  template: `
    <div>
      <button (click)="show(addProductSection)">Add Product</button>
      <section class="add-product" #addProductSection >
        <label>product name: <input type="text" #name></label>
        <label>product price: <input type="text" #price></label>
        <button (click)="hide(addProductSection); addProduct(name.value, price.value)">Submit</button>
      </section>
    </div>
  `,
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private _productsService: ProductsService) { }

  ngOnInit() {
  }

  addProduct(name, price) {
    this._productsService.addProduct({
      'name': name,
      'price': price
    });
  }

  show(el) {
    el.style.display = 'block';
  }
  hide(el) {
    el.style.display = 'none';
  }
}
