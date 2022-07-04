import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {GoogleBooksApiService} from '../../services/google-books-api.service';
import {map, mergeMap} from 'rxjs/operators';
import { loadBooks, retrievedBooks} from '../actions/books.actions';
import {AppState} from '../state/app.state';
import {Store} from '@ngrx/store';

@Injectable()
export class BooksEffects {

  loadBooks$ = createEffect(
    () => this._actions$.pipe(
      ofType(loadBooks),
      mergeMap(
        () => this._booksService.getBooks()
          .pipe(
            map(
              (books) => retrievedBooks({ books })
            )
          )
        )
      )
  );


  constructor(
    private _actions$: Actions,
    private _booksService: GoogleBooksApiService,
    private _store: Store<AppState>
  ) {
  }

}
