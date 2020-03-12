import { LoteriaService } from './loteria/loteria.service';
import { Component, OnInit } from '@angular/core';


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

  constructor(private loteriaService: LoteriaService) {}

  ngOnInit() {
  }

  menuToggle() {
    return this.exibindoMenu = !this.exibindoMenu;
  }

  getUltimoResultado(jogo) {
    this.jogo = jogo;
    this.loteriaService.getUltimoResultado(jogo)
    .then(results => {
      this.resultado = results;

      this.possuiResultado = this.resultado.length !== 0;

      if (this.possuiResultado) {
        this.currentConcurso = this.resultado.numero_concurso;
      }

      // console.log(this.resultado);
    });
  }

  getResultadoPrevious() {
    this.loteriaService.getResultado(this.jogo, this.currentConcurso - 1)
    .then(results => {
      this.resultado = results;

      this.possuiResultado = this.resultado.length !== 0;

      if (this.possuiResultado) {
        this.currentConcurso = this.resultado.numero_concurso;
      }
    });
  }

  getResultadoNext() {
    this.loteriaService.getResultado(this.jogo, this.currentConcurso + 1)
    .then(results => {
      this.resultado = results;

      this.possuiResultado = this.resultado.length !== 0;

      if (this.possuiResultado) {
        this.currentConcurso = this.resultado.numero_concurso;
      }
    });
  }

}
