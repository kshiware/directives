import { Directive, HostBinding, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMagicRgb]'
})
export class MagicRgbDirective implements OnInit {

  @HostBinding('style.background')
  bkCl: string

  @Input('appMagicRgb')
  dfCl: string

  constructor() { }

  ngOnInit() {
    this.bkCl = this.dfCl
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