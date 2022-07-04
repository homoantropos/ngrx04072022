import {booksReducer} from './books.reducer';
import {collectionReducer} from './collection.reducer';

export const appReducer = {
  books: booksReducer,
  collection: collectionReducer
}
