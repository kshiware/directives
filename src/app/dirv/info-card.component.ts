import { Component, OnInit, Input } from '@angular/core';
import { Info } from './info-item';

@Component({
  selector: 'app-info-card',
  template: `
  <div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">Company - {{info.cmp}}</div>
     <div class="card-body">
      <h5 class="card-title">OS - {{info.os}}</h5>
      <p class="card-text">Selling Price - {{info.pz}}</p>
    </div>
</div>
  `,
  styles: []
})
export class InfoCardComponent implements OnInit {
  @Input()
  info: Info
  constructor() { }

  ngOnInit() {
  }

}
