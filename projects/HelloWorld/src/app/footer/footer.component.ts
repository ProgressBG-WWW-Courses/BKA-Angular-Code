import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.ng-footer',
  template: `
    <div class="footer">
        <p>Paragraph2</p>
    </div>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
