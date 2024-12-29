import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHovereffect]'
})
export class HovereffectDirective {

  @HostBinding('style.background-color')
  bgcolor: string;

  constructor(private eRef: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(this.eRef.nativeElement,'background-color','blue');
    this.bgcolor = 'white';
  }

  @HostListener('mouseenter') onmouseenter() {
    // this.renderer.setStyle(this.eRef.nativeElement,'background-color','blue');
    this.bgcolor = 'cadetblue';
  }

  @HostListener('mouseleave') onmouseleave() {
    // this.renderer.setStyle(this.eRef.nativeElement,'background-color','red');
    this.bgcolor = 'white';
  }

}
