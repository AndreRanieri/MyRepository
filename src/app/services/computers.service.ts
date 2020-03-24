import { Injectable } from '@angular/core';
import {Computers} from '../models/computers';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ComputersService {
  computer: Computers[];
  brandDispo = ['Dell', 'HP', 'Apple', 'Asus'];
  typeComputerDispo = ['Portable', 'Fix', 'Hybrid Tablet'];
  categoryDispo = ['Gaming', 'Office', 'Low Price'];
  urlApi = 'http://localhost:3000/computers';

  constructor(private http: HttpClient) {}

  getComputer(): Observable<Computers[]> {
    return this.http.get<Computers[]>(this.urlApi)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getComputerById(id: number): Observable<Computers> {
    return this.http.get<Computers>(this.urlApi + '/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  deleteComputer(computer: Computers): Observable<Computers> {
    return this.http.delete<Computers>(this.urlApi + '/' + computer.id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  addComputer(computer: Computers): Observable<Computers> {
    computer.dateEntreeMagasin = new Date();
    return this.http.post<Computers>(this.urlApi, computer).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  editComputer(computer: Computers): Observable<Computers> {
    return this.http.put<Computers>(this.urlApi + '/' + computer.id, computer).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
   }

}
