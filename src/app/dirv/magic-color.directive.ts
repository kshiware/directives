import { Directive, HostBinding, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMagicColor]'
})
export class MagicColorDirective implements OnInit {
  @HostBinding('style.background')
  bkCl: string

  // @Input('MagicColor')
  // dfCl: string

  constructor() { }
  ngOnInit() {
    // this.bkCl = this.dfCl
  }

  magicColor() {
    this.bkCl =  `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)} )`
    console.log(this.bkCl)
  }

  @HostListener('mouseenter')
  msIn() {
    this.magicColor()
  }

  @HostListener('mouseleave')
  msLv() {
    this.magicColor()
  }
}
