import { Component, OnInit, Input } from '@angular/core';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-quina',
  templateUrl: './quina.component.html',
  styleUrls: ['./quina.component.css']
})
export class QuinaComponent {

  @Input() resultado: any;

  constructor(private appComponent: AppComponent) {}

  getResultadoPrevious() {
    this.appComponent.getResultadoPrevious();
  }

  getResultadoNext() {
    this.appComponent.getResultadoNext();
  }

}
