import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputNumbers]'
})
export class InputNumbersDirective {

  @Input() appInputNumbers = "5"
  
  constructor(private el: ElementRef) {
    //input with only numbers
    //max length is 5
    this.el.nativeElement.onkeypress = (evt: { which: number; preventDefault: () => void; }) => {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
      if(this.el.nativeElement.value.length >= this.appInputNumbers){
        evt.preventDefault();
      }
    }
    
 }

}
