import { createSelector } from '@ngrx/store';

import * as fromBooks from './books.reducers';

export const getBooks = createSelector(
  fromBooks.booksFeature.selectBooksState,
  (state) => {
    return state.books;
  }
);
