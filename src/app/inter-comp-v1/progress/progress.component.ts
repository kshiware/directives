import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progress: number = 0
  prgStr : string

  @Output()
  onProgress : EventEmitter<number> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  plus() {
    this.progress = this.progress>= 100 ? this.progress =100 : this.progress +=25
    this.prgStr = `${this.progress}%`
    console.log(this.progress)
    this.onProgress.emit(this.progress)
  }

  minus() {
    this.progress = this.progress<= 0 ? this.progress = 0 : this.progress -=25
    console.log(this.progress)
    this.prgStr = `${this.progress}%`
    this.onProgress.emit(this.progress)
  }
}