import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let spaces = 0; if (args) {
      spaces = parseInt(args);
    }

    let reversed = '';
    for (let i = value.length - 1; i >= 0; i--) {
      reversed += value.substring(i, i + 1);
      reversed += Array(spaces + 1).join(' ');
    }
    return reversed;
  }

}
