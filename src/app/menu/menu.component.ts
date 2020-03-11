import { Component } from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private appComponent: AppComponent) {};

  getUltimoResultadoMegaSena() {
    this.appComponent.getUltimoLancamento('megasena');
    this.appComponent.menuToggle();
  }

  getUltimoResultadoLotoFacil() {
    this.appComponent.getUltimoLancamento('lotofacil');
    this.appComponent.menuToggle();
  }

  getUltimoResultadoQuina() {
    this.appComponent.getUltimoLancamento('quina');
    this.appComponent.menuToggle();
  }

  getUltimoResultadoLotoMania() {
    this.appComponent.getUltimoLancamento('lotomania');
    this.appComponent.menuToggle();
  }

  getUltimoResultadoTimeMania() {
    this.appComponent.getUltimoLancamento('timemania');
    this.appComponent.menuToggle();
  }

}
