import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  people = [
    { name: 'Maria', age: 35, city: 'Sofia' },
    { name: 'Ivan', age: 12, city: 'Plovdiv' },
    { name: 'Peter', age: 22, city: 'Varna' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
