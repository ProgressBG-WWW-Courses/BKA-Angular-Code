import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <nav>
    <a href="home">Home</a>
    <a href="about">About</a>
    <a href="contacts">Contacts</a>
  </nav>
  `,
  styleUrls: ['nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
