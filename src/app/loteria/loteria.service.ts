import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LoteriaService {

  token = 'IgSPnNGki4takzD';
  api01 = 'https://apiloterias.com.br/app/resultado?loteria';
  api02 = 'http://confiraloterias.com.br/app/resultado?loteria';

  constructor(private http: HttpClient) { }

  getUltimoResultado(jogo): Promise<any> {
    return this.http.get(`${this.api02}=${jogo}&token=${this.token}`)
      .toPromise()
      .then(response => response);
  }

  getResultado(jogo, concurso): Promise<any> {
    return this.http.get(`${this.api02}=${jogo}&token=${this.token}&concurso=${concurso}`)
      .toPromise()
      .then(response => response);
  }
}
