import { MegasenaService } from './loteria/megasena.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private megasenaService: MegasenaService) {}

  getUltimoLancamento() {
    this.megasenaService.getUltimoResultado()
      .then(() => null);
  }
}
