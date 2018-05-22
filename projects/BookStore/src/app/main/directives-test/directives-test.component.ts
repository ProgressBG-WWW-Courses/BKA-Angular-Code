import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-test',
  styles: [`section>h2{
              border: .1em solid #000; margin: 1em;
            }`],
  template: `<section>
              <h2 *ngIf="false">*ngIf="false"</h2>
              <h2 *ngIf="true">*ngIf="true"</h2>
              <h2 *ngIf="3>2-1">*ngIf="3>2-1"</h2>
              <h2 *ngIf="showH2">*ngIf="showH2"</h2>
            </section>`
})
export class DirectivesTestComponent implements OnInit {

  showH2 = 'true';

  constructor() { }

  ngOnInit() {
  }

}
