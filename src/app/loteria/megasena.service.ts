import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MegasenaService {

  token = 'IgSPnNGki4takzD';
  megaSena01 = `https://apiloterias.com.br/app/resultado?loteria=megasena&token=${this.token}`
  megaSena02 = `http://confiraloterias.com.br/app/resultado?loteria=megasena&token=${this.token}`;

  constructor(private http: HttpClient) { }

  getUltimoResultado(): Promise<any> {
    return this.http.get(`${this.megaSena02}`)
      .toPromise()
      .then(response =>  {
        console.log(response);
      });
  }
}
