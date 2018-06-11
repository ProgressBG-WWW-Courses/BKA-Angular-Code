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
    li{
      display:block;
      width: 80%;
      border-bottom: 1px dotted gray;
      margin: 1em 0;
      // border: 5px solid green;
      // background: red;
    }
    li>button{
      float: right
    }
  `]
})
export class ProductComponent implements OnInit {
  @Input() productData;
  @Output() productDelete = new EventEmitter();

  ngOnInit() {
  }

  delete(){
    this.productDelete.emit("test");
  }

}
