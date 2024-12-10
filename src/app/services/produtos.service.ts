

import { Injectable } from '@angular/core';

import { Produto } from 'src/model/produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, first, of, tap } from 'rxjs';
import { environment } from '../environments/environment.prod';




@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
 url = environment.apiProdutos;

  constructor(private http:HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url).pipe(
      first(),
      tap(() => console.log('Produtos carregados com sucesso!')),
      catchError(this.handleError<Produto[]>('getProdutos'))
    );
  }
  
  create(produto:Produto):Observable<Produto>{
    return this.http.post<Produto>(this.url, produto).pipe(
      first(),
      tap(() => console.log('Produto criado com sucesso!')),
      catchError(this.handleError<Produto>('create'))
    );
  }


  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`Erro ao ${operation}`);
      return of(result as T);
    };
  }
}
