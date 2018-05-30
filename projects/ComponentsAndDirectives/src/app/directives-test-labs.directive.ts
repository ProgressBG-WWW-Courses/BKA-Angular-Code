import { Directive, ElementRef   } from '@angular/core';

@Directive({
  selector: '[appDirectivesTestLabs]'
})
export class DirectivesTestLabsDirective {


  constructor(private el: ElementRef) {
    el.nativeElement.style.background = "red"
  }
}
