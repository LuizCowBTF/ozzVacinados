import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Vacinados } from '../model/vacinados';


@Injectable({
  providedIn: 'root'
})
export class VacinaServiceService {

  url = 'http://localhost:3000/vacinados';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  pegarVacinados(): Observable<Vacinados[]> {
    return this.httpClient.get<Vacinados[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  pegarVacinadosPorId(id: number): Observable<Vacinados> {
    return this.httpClient.get<Vacinados>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  salvarVacinados(vacinados: Vacinados): Observable<Vacinados> {
    return this.httpClient.post<Vacinados>(this.url, JSON.stringify(vacinados), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  atualizaVacinados(vacinados: Vacinados): Observable<Vacinados> {
    return this.httpClient.put<Vacinados>(this.url + '/' + vacinados.document_id, JSON.stringify(vacinados), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError))
  }

  apagarVacinados(vacinados: Vacinados) {
    return this.httpClient.delete<Vacinados>(this.url + '/' + vacinados.document_id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else
    {
      errorMessage = `Código do erro: ${ error.status }, ` + `menssagem: ${ error.message }`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
