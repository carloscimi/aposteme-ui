import { Component, OnInit, Input } from '@angular/core';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-lotomania',
  templateUrl: './lotomania.component.html',
  styleUrls: ['./lotomania.component.css']
})
export class LotomaniaComponent {

  @Input() resultado: any;

  constructor(private appComponent: AppComponent) {}

  getResultadoPrevious() {
    this.appComponent.getResultadoPrevious();
  }

  getResultadoNext() {
    this.appComponent.getResultadoNext();
  }

}
