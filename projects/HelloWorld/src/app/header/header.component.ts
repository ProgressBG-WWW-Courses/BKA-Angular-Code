import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.ng-header',
  template: `<div class="header">
    < p > Paragraph 1</ p >
  </div>`
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
