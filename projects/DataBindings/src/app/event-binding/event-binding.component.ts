import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  inputText;

  constructor() { }

  ngOnInit() {
  }

  showInputText(eventObj){
    // this.inputText = eventObj.target.value
  }

  addToList(inputValue){
    this.inputText = inputValue
  }
}
