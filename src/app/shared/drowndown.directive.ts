import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDrowndown]'
})
export class DrowndownDirective {
  @HostBinding('class.open') isOpen = false;

  // Only toggles on click of element
  // @HostListener('click') toggleOpen(){
  //   this.isOpen = !this.isOpen;
  // }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}

}

