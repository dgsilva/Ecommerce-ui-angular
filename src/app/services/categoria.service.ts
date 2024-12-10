import { Injectable } from '@angular/core';
import { Observable, catchError, first, of, tap } from 'rxjs';
import { Categoria } from 'src/model/categoria';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url = ''
  constructor( private http: HttpClient) { }

  create(categoria:Categoria):Observable<Categoria>{
    return this.http.post<Categoria>(this.url, categoria);
  }

  getAll():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url);
  }

  update(categoria:Categoria):Observable<Categoria>{
    const url2  =`${this.url}/${categoria.id}`;
    return this.http.put<Categoria>(url2,categoria).pipe(
      first(),
      tap(() => console.log('Categoria atualizada com sucesso!')),
      catchError(this.handleError<Categoria>('update'))
    );;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`Erro ao ${operation}`);
      return of(result as T);
    };
  
  }
}
