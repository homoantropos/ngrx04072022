import {createReducer, on} from '@ngrx/store';
import {retrievedBooks} from '../actions/books.actions';
import {initialAppState} from '../state/app.state';

export const booksReducer = createReducer(
  initialAppState.books,
  on(retrievedBooks, (state, { books }) => books)
);
