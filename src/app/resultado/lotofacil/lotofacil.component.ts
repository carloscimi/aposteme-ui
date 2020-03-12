import { Component, OnInit, Input } from '@angular/core';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-lotofacil',
  templateUrl: './lotofacil.component.html',
  styleUrls: ['./lotofacil.component.css']
})
export class LotofacilComponent {

  @Input() resultado: any;

  constructor(private appComponent: AppComponent) {}

  getResultadoPrevious() {
    this.appComponent.getResultadoPrevious();
  }

  getResultadoNext() {
    this.appComponent.getResultadoNext();
  }

}
