import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LoteriaService {

  token = 'BZ8t2T11wkH5iVZ';
  api01 = 'https://apiloterias.com.br/app/resultado?loteria';
  api02 = 'https://confiraloterias.com.br/app/resultado?loteria';

  apiLotodicas = 'https://www.lotodicas.com.br/api/v2/';
  tokenLotodicas = '728f039c8e705b66607a5dffeb51f4ade21775dd5583083c423b5d96a56f0376';


  constructor(private http: HttpClient) { }

  getUltimoResultado(jogo): Promise<any> {
    const url = `${this.api02}=${jogo}&token=${this.token}`;

    // return this.http.get(url)
    //   .toPromise()
    //   .then(response => response);

    return this.http.get(`${this.apiLotodicas}${jogo}/results/last?token=${this.tokenLotodicas}`)
      .toPromise()
      .then(response => response);
  }

  getResultado(jogo, concurso): Promise<any> {
    const url = `${this.api02}=${jogo}&concurso=${concurso}&token=${this.token}`;

    // return this.http.get(url)
    //   .toPromise()
    //   .then(response => response);

    return this.http.get(`${this.apiLotodicas}${jogo}/results/${concurso}?token=${this.tokenLotodicas}`)
      .toPromise()
      .then(response => response);
  }
}
