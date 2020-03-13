import { LoteriaService } from './loteria/loteria.service';
import { Component, OnInit } from '@angular/core';
import { doesNotReject } from 'assert';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  exibindoMenu;

  resultado: any = [];
  currentConcurso;

  possuiResultado;

  jogo;

  resourceLoaded = true;

  constructor(private loteriaService: LoteriaService) {}

  ngOnInit() {
  }

  menuToggle() {
    return this.exibindoMenu = !this.exibindoMenu;
  }

  getUltimoResultado(jogo) {
    this.startProgress();

    this.loteriaService.getUltimoResultado(jogo)
    .then(results => {
      this.resultado = results;

      this.possuiResultado = this.resultado.length !== 0;

      if (this.possuiResultado) {
        this.currentConcurso = this.resultado.numero_concurso;
      }
      this.resourceLoaded = true;

      this.jogo = jogo;
      // console.log(this.resultado);
    });
  }

  getResultadoPrevious() {

    return this.loteriaService.getResultado(this.jogo, this.currentConcurso - 1)
    .then(results => {
      this.resultado = results;

      this.possuiResultado = this.resultado.length !== 0;

      if (this.possuiResultado) {
        this.currentConcurso = this.resultado.numero_concurso;
      }

      this.resourceLoaded = true;
    });
  }

  getResultadoNext() {

    return this.loteriaService.getResultado(this.jogo, this.currentConcurso + 1)
    .then(results => {
      this.resultado = results;

      this.possuiResultado = this.resultado.length !== 0;

      if (this.possuiResultado) {
        this.currentConcurso = this.resultado.numero_concurso;
      }

      this.resourceLoaded = true;
    });
  }

  private startProgress() {
    this.jogo = null;
    this.resourceLoaded = false;
  }

}
