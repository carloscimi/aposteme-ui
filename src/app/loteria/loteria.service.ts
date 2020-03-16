import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LoteriaService {

  token = 'IgSPnNGki4takzD';
  api01 = 'https://apiloterias.com.br/app/resultado?loteria';
  api02 = 'https://confiraloterias.com.br/app/resultado?loteria';

  apiLotodicas = 'https://www.lotodicas.com.br/api/v2/';
  tokenLotodicas = '728f039c8e705b66607a5dffeb51f4ade21775dd5583083c423b5d96a56f0376';


  constructor(private http: HttpClient) { }

  getUltimoResultado(jogo): Promise<any> {
    return this.http.get(`https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid=7602&format=json`)
      .toPromise()
      .then(response => response);

    // return this.http.get(`${this.apiLotodicas}${jogo}/results/last?token=${this.tokenLotodicas}`)
    //   .toPromise()
    //   .then(response => response);
  }

  getResultado(jogo, concurso): Promise<any> {
    // return this.http.get(`${this.api02}=${jogo}&token=${this.token}&concurso=${concurso}`)
    //   .toPromise()
    //   .then(response => response);
    return this.http.get(`${this.apiLotodicas}${jogo}/results/${concurso}?token=${this.tokenLotodicas}`)
      .toPromise()
      .then(response => response);
  }
}
