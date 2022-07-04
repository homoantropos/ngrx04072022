import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Book} from '../../model/book.model';

export const booksListSelector = createFeatureSelector<ReadonlyArray<Book>>('books');
export const collectionSelector = createFeatureSelector<ReadonlyArray<string>>('collection');

export const collectionBooksListSelector = createSelector(
  booksListSelector,
  collectionSelector,
  (books, collection) => {
    return collection.map(
      id => books.find(
        book => book.id === id
      )
    );
  }
);

