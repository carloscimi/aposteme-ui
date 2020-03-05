import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class MegasenaService {

  token = 'IgSPnNGki4takzD';
  megaSenaAPI = `http://confiraloterias.com.br/app/resultado?loteria=megasena&token=${this.token}`;

  constructor(private http: HttpClient) { }

  getUltimoResultado(): Promise<any> {
    // const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.get(`${this.megaSenaAPI}`)
      .toPromise()
      .then(response =>  {
        console.log(response[`content`]);
      });
  }
}
