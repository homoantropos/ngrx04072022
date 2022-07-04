import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {booksListSelector, collectionBooksListSelector} from './store/selectors/books.selectors';
import {GoogleBooksApiService} from './services/google-books-api.service';
import {addBook, loadBooks, removeBook, retrievedBooks} from './store/actions/books.actions';
import {AppState} from './store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx04072022';
  books$ = this._store.select(booksListSelector);
  collection$ = this._store.select(collectionBooksListSelector);

  constructor(
    private _store: Store<AppState>,
    private _booksService: GoogleBooksApiService
  ) {}

  ngOnInit(): void {
    this._store.dispatch(loadBooks());
  }

  onAdd(bookId: string): void {
    this._store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string): void {
    this._store.dispatch(removeBook({ bookId }));
  }
}
