import {createAction, props} from '@ngrx/store';
import {Book} from '../../model/book.model';

export const addBook = createAction(
  '[Book Collection] Add Book',
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId: string }>()
);

export const retrievedBooks = createAction(
  '[Book List/API] Books Retrieved Success',
  props<{ books: ReadonlyArray<Book> }>()
);

export const loadBooks = createAction(
  '[Book List/API] Load Books'
);

export const booksLoaded = createAction(
  '[Book List] Books Loaded Successfully',
  props<{ books: ReadonlyArray<Book> }>()
);
