import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-test',
  templateUrl: './directives-test.component.html',
  styleUrls: ['./directives-test.component.css']
})
export class DirectivesTestComponent implements OnInit {
  myVar = '';

  constructor() { }

  ngOnInit() {
  }

}
