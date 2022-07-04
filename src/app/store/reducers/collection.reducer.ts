import {createReducer, on} from '@ngrx/store';
import {initialAppState} from '../state/app.state';
import {addBook, removeBook} from '../actions/books.actions';

const initialCollectionState = initialAppState.collection;

export const collectionReducer = createReducer(
  initialCollectionState,
  on(addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) {
      return state;
    }
    return [...state, bookId];
  }),
  on(removeBook, (state, { bookId }) => state.filter(id => id !== bookId))
);
