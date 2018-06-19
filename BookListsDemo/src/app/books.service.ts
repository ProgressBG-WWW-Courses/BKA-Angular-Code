import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IBook } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // tslint:disable-next-line:max-line-length
  booksURL = 'https://raw.githubusercontent.com/ProgressBG-WWW-Courses/BKA-Angular-Code/RequestsAndObsevables/RequestsAndObsevables/src/assets/data/books.json';

  constructor(private http: HttpClient) { }

  fetchBooks(): Observable<IBook[]> {
    let obs = this.http.get<IBook[]>(this.booksURL);
    console.dir(obs);
    return obs;
  }
}
