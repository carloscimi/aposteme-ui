import { MegasenaService } from './loteria/megasena.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonModule,
    FormsModule,
    CardModule
  ],
  providers: [MegasenaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
