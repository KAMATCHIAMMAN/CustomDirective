import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appFontupdate]'
})
export class FontupdateDirective {

  constructor(EF:ElementRef) {
    EF.nativeElement.style.color="green";
    EF.nativeElement.style.fontweight="bold";
   }

}
