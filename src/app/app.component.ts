import { LoteriaService } from './loteria/loteria.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  exibindoMenu;

  resultado: any=[];

  possuiResultado;

  constructor(private loteriaService: LoteriaService) {};

  ngOnInit() {
    
  }

  menuToggle() {
    return this.exibindoMenu = !this.exibindoMenu;
  }

  getUltimoLancamento(jogo) {
    this.loteriaService.getUltimoResultado(jogo)
    .then(results => {
      this.resultado = results;
    });

    console.log(this.resultado.length);

    this.possuiResultado = this.resultado.length!=0;
  }

}
