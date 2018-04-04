import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNavbarScroll]'
})
export class NavbarScrollDirective {
  constructor(private el: ElementRef) {}

  @Input() navBarScroll: string;
  // @HostListener('mouseenter')
  // onMouseEnter() {
  //   this.isScroll();
  // }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScroll();
  }

  private isScroll() {
    if (window.pageYOffset === 0) {
      this.el.nativeElement.style.backgroundColor = 'transparent';
    } else {
      this.el.nativeElement.style.backgroundColor = 'rgba(255, 255, 255, 0.59)';
    }
  }
}
