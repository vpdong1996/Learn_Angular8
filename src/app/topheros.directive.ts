import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTopheros]'
})
export class TopherosDirective {
  color: string = 'lightblue';
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = color ? 'white' : 'black';
  }

}
