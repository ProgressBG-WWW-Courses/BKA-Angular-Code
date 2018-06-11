import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-product',
  template:`
    <div>
      <label>product name: <input type="text" #pname></label>
      <label>product price: <input type="text" #pprice></label>
      <button (click)="this.addProductEvent.emit( {'pname': pname.value, 'pprice': pprice.value} )">Add Product</button>
    </div>
  `,
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() addProductEvent = new EventEmitter()

  constructor() { }addProduct

  ngOnInit() {
  }
}
