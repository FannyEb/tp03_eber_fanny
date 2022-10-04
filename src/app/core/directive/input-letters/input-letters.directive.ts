import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputLetters]'
})
export class InputLettersDirective {

  constructor(private el: ElementRef) {
    //input with only letters
    this.el.nativeElement.onkeypress = (evt: { which: number; preventDefault: () => void; }) => {
      if (evt.which < 65 || evt.which > 122) {
        evt.preventDefault();
      }
    }
    
 }

}
