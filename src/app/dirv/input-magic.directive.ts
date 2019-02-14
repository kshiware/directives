import { Directive, HostBinding, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputMagic]'
})
export class InputMagicDirective implements OnInit {
  @HostBinding('style.width.px')
  img: number
  inwid: number
 
  @HostBinding('style.height.px')
  imgh: number

  @Input('appInputMagic')
  dfCl: number
  constructor() { } 

  ngOnInit() {
    this.inwid = this.dfCl
  }
  inputw() {
    this.inwid = 200
    console.log(this.inwid)
  } 

  @HostListener('mouseenter')
   magicinputen() {
    this.inputw()
  }

  @HostListener('mouseleave')
  magicinputout() {
    this.inputw()
  }
  zoomin() {
      this.img = 100
      this.imgh = 50
  }
  zoomout() {
    this.img = 50
    this.imgh = 100
 }
  @HostListener('mouseenter')
   magicimgen() {
    this.zoomin()
  }

  @HostListener('mouseleave')
  magicimgout() {
    this.zoomout()
  }
}