import { Component, OnInit, Input } from '@angular/core';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-megasena',
  templateUrl: './megasena.component.html',
  styleUrls: ['./megasena.component.css']
})
export class MegasenaComponent {

  resourceLoaded = true;

  @Input() resultado: any;

  constructor(private appComponent: AppComponent) {}

  getResultadoPrevious() {
    this.startProgress();

    this.appComponent.getResultadoPrevious()
    .then( () => {
      this.resourceLoaded = true;
    });
  }

  getResultadoNext() {
    this.startProgress();

    this.appComponent.getResultadoNext()
    .then( () => {
      this.resourceLoaded = true;
    });
  }

  private startProgress() {
    this.resourceLoaded = false;
  }

}
