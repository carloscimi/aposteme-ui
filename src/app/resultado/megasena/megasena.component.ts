import { Component, OnInit, Input } from '@angular/core';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-megasena',
  templateUrl: './megasena.component.html',
  styleUrls: ['./megasena.component.css']
})
export class MegasenaComponent {

  @Input() resultado: any;

  constructor(private appComponent: AppComponent) {}

  getResultadoPrevious() {
    this.appComponent.getResultadoPrevious();
  }

  getResultadoNext() {
    this.appComponent.getResultadoNext();
  }

}
