import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/shared/models/book.model';

export const addBook = createAction(
  '[books page] add book',
  props<{ book: Book }>()
);
export const addBookSuccess = createAction(
  '[books page] add book success',
  props<{ book: Book }>()
);

export const loadBooks = createAction('[books page] load books');
export const loadBooksSuccess = createAction(
  '[books page] load books success',
  props<{ books: Book[] }>()
);
