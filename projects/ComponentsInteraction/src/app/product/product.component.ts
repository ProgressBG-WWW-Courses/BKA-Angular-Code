import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <li>
      <span>{{product.name}}</span> - <span>{{product.price}}</span>
      <button (click)="delete(product)">Delete</button>    
    </li>
  `,
  styleUrls: []
})
export class ProductComponent implements OnInit {
  @Input('productData') product;
  @Output() prdDeleteEvent = new EventEmitter();

  ngOnInit() {
  }

  delete(product){
    this.prdDeleteEvent.emit(product);
  }

}
