import { Component, OnInit } from '@angular/core';
import { Info } from './info-item';

@Component({
  selector: 'app-dirv',
  templateUrl: './dirv.component.html',
  styleUrls: ['./dirv.component.css']
})
export class DirvComponent implements OnInit {
  isTgl = false
  mobiles: Array<Info> = [
    { cmp: 'moto', os: 'android', pz: 10 },
    { cmp: 'apple', os: 'ios', pz: 30 },
    { cmp: 'samsung', os: 'custom android', pz: 50 },
    { cmp: 'BB', os: 'rim', pz: 40 },
    { cmp: 'microsoft', os: 'mango', pz: 50 },
  ]
  constructor() { }

  ngOnInit() {
  }

}
