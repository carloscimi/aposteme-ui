import { Component } from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private appComponent: AppComponent) {}

  getUltimoResultadoMegaSena() {
    this.appComponent.getUltimoResultado('mega_sena');
    this.appComponent.menuToggle();
  }

  getUltimoResultadoLotoFacil() {
    this.appComponent.getUltimoResultado('lotofacil');
    this.appComponent.menuToggle();
  }

  getUltimoResultadoQuina() {
    this.appComponent.getUltimoResultado('quina');
    this.appComponent.menuToggle();
  }

  getUltimoResultadoLotoMania() {
    this.appComponent.getUltimoResultado('lotomania');
    this.appComponent.menuToggle();
  }

  getUltimoResultadoTimeMania() {
    this.appComponent.getUltimoResultado('timemania');
    this.appComponent.menuToggle();
  }

}
