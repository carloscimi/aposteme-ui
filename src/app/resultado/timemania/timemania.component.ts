import { Component, OnInit, Input } from '@angular/core';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-timemania',
  templateUrl: './timemania.component.html',
  styleUrls: ['./timemania.component.css']
})
export class TimemaniaComponent{

  @Input() resultado: any;

  constructor(private appComponent: AppComponent) {}

  getResultadoPrevious() {
    this.appComponent.getResultadoPrevious();
  }

  getResultadoNext() {
    this.appComponent.getResultadoNext();
  }

}
