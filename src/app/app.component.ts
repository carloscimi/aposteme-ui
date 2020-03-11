import { MegasenaService } from './loteria/megasena.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  exibindoMenu;

  resultado: any=[];

  constructor(private megasenaService: MegasenaService) {};

  ngOnInit() {
    this.getUltimoLancamento();
  }

  menuToggle() {
    return this.exibindoMenu = !this.exibindoMenu;
  }

  getUltimoLancamento() {
    this.megasenaService.getUltimoResultado()
    .then(results => {
      this.resultado = results;
    });
  }

}
