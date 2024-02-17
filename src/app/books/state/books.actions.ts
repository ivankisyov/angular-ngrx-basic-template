import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/shared/models/book.model';

export const ADD_BOOK_ACTION = '[books page] add book';
export const ADD_BOOK_SUCCESS = '[books page] add book success';
export const LOAD_BOOKS = '[books page] load books';
export const LOAD_BOOKS_SUCCESS = '[books page] load books success';

export const addPost = createAction(ADD_BOOK_ACTION, props<{ post: Book }>());
export const addPostSuccess = createAction(
  ADD_BOOK_SUCCESS,
  props<{ post: Book }>()
);

export const loadPosts = createAction(LOAD_BOOKS);
export const loadPostsSuccess = createAction(
  LOAD_BOOKS_SUCCESS,
  props<{ posts: Book[] }>()
);
