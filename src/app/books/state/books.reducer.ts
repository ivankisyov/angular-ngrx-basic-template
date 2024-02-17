import { loadPostsSuccess, addPostSuccess } from './books.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './books.state';

export const postsReducer = createReducer(
  initialState,
  on(addPostSuccess, (state, action) => {
    let post = { ...action.post };

    return {
      ...state,
      posts: [...state.books, post],
    };
  }),

  on(loadPostsSuccess, (state, action) => {
    return {
      ...state,
      posts: action.posts,
    };
  })
);
