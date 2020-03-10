import { MegasenaService } from './loteria/megasena.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  exibindoMenu;

    types: SelectItem[];
    selectedType: string;

  constructor(private megasenaService: MegasenaService) {
    this.types = [
        {label: 'Apartment', value: 'Apartment'},
        {label: 'House', value: 'House'},
        {label: 'Studio', value: 'Studio'}
    ];
  }

  menuToggle() {
    return this.exibindoMenu = !this.exibindoMenu;
  }

  ngOnInit() {
    this.getUltimoLancamento();
  }

  getUltimoLancamento() {
    this.megasenaService.getUltimoResultado()
      .then(() => null);
  }

}
