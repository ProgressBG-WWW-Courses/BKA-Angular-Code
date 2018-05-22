import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  styleUrls: [],
  templateUrl: './directives.component.html'
})
export class DirectivesComponent implements OnInit {

  shown = true;
  isValid = false;

  myVar = 'B';

  names = ['maria', 'ivan'];

  constructor() { }

  ngOnInit() {}

}
