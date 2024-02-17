import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterState } from '@angular/router';
import { BooksState } from './books.state';

export const BOOKS_STATE_NAME = 'books';

const getBooksState = createFeatureSelector<BooksState>(BOOKS_STATE_NAME);

export const getBooks = createSelector(getBooksState, (state) => {
  return state.books;
});
