import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <li>
      <span>{{productData.name}}</span> - <span>{{productData.price}}</span>
      <button (click)="delete(productData)">Delete</button>    
    </li>
  `,
  styles: [`
    :host{
      dislay:block;
      border: 5px solid green;
      background: red;
    }
  `]
})
export class ProductComponent implements OnInit {
  @Input() productData;
  @Output() prdDeleteEvent = new EventEmitter();

  ngOnInit() {
  }

  delete(product){
    this.prdDeleteEvent.emit("test");
  }

}
