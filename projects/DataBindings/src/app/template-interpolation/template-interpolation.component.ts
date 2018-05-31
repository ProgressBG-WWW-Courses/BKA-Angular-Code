import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-interpolation',
  templateUrl: './template-interpolation.component.html',
  styleUrls: ['./template-interpolation.component.css']
})
export class TemplateInterpolationComponent implements OnInit {
  note = "bg-red"
  name = "ada"

  constructor() { }

  greet(userName){
    return "Hello " + userName.toUpperCase();
  }

  colorInGreen(){
    this.note = "bg-green";
  }

  ngOnInit() {
  }

}
