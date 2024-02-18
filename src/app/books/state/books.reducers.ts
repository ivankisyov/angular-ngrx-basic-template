import { Book } from 'src/app/shared/models/book.model';
import { createFeature, createReducer, on } from '@ngrx/store';
import { addBookSuccess, loadBooksSuccess } from './books.actions';

export interface BooksState {
  books: Book[];
}

export const initialState: BooksState = {
  books: [],
};

const reducer = createReducer(
  initialState,
  on(addBookSuccess, (state, action) => {
    let post = { ...action.book };

    return {
      ...state,
      posts: [...state.books, post],
    };
  }),

  on(loadBooksSuccess, (state, action) => {
    return {
      ...state,
      posts: action.books,
    };
  })
);

export const booksFeature = createFeature({
  name: 'books',
  reducer,
});
