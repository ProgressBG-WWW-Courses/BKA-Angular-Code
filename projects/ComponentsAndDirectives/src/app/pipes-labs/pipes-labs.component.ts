import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-labs',
  styleUrls: ['./pipes-labs.component.css'],
  template: `
    <h2>{{name | uppercase}}</h2>
    <p>Currency: {{ 23.55 | currency:"lv" | uppercase}}</p>
    <p>Date: {{ '2018-01-15T09:03:01+0900' | date:' MMMM y - EEEE d' }}</p>
  `,
})
export class PipesLabsComponent implements OnInit {
  name = "ada byron";

  constructor() { }

  ngOnInit() {
  }

}
