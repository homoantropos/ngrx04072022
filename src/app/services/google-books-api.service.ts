import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksApiService {
  constructor(
    private _http: HttpClient
  ) { }

  getBooks(): Observable<ReadonlyArray<Book>> {
    return this._http.get<{ items: Book[] }>(
      'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
    ).pipe(
      map(
        books => books.items || []
      )
    );
  }
}
