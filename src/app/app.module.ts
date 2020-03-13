import localeBrl from '@angular/common/locales/pt';

import { LoteriaService } from './loteria/loteria.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { registerLocaleData } from '@angular/common';

import { MegasenaComponent } from './resultado/megasena/megasena.component';
import { LotofacilComponent } from './resultado/lotofacil/lotofacil.component';
import { QuinaComponent } from './resultado/quina/quina.component';
import { LotomaniaComponent } from './resultado/lotomania/lotomania.component';
import { TimemaniaComponent } from './resultado/timemania/timemania.component';


registerLocaleData(localeBrl, 'pt-BR');


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MegasenaComponent,
    LotofacilComponent,
    QuinaComponent,
    LotomaniaComponent,
    TimemaniaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonModule,
    FormsModule,
    ProgressSpinnerModule
  ],
  providers: [LoteriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
