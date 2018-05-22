import { Component, OnInit } from '@angular/core';
import { Directive, Renderer, ElementRef } from '@angular/core';

@Component({
  selector: 'app-custom-directive-example',
  templateUrl: './custom-directive-example.component.html',
  styleUrls: ['./custom-directive-example.component.css']
})
export class CustomDirectiveExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


@Directive({
  selector: '[appImportant]'
})
export class CustomDirectiveDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', '#d12929');
  }

}
