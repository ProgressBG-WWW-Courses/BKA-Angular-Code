import { Component, OnInit } from '@angular/core';
import { DemoModel } from './../demo-model';

@Component({
  selector: 'app-demo-tdf',
  templateUrl: './demo-tdf.component.html',
  styleUrls: ['./demo-tdf.component.css']
})
export class DemoTDFComponent implements OnInit {
  demoModel1 = new DemoModel("Maria", "123")

  constructor() { }

  ngOnInit() {
  }

}
