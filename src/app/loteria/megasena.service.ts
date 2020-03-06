import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MegasenaService {

  token = 'IgSPnNGki4takzD';
  megaSenaAPI = `http://confiraloterias.com.br/app/resultado?loteria=megasena&token=IgSPnNGki4takzD`;

  constructor(private http: HttpClient) { }

  getUltimoResultado(): Promise<any> {
    return this.http.get(`${this.megaSenaAPI}`)
      .toPromise()
      .then(response =>  {
        console.log(response[`nome`]);
      });
  }
}
