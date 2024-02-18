import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { routerFeatureKey } from './router/router.selector';
import { ActionReducerMap } from '@ngrx/store';

import * as fromShared from './shared/shared.reducers';
import * as fromBooks from '../books/state/books.reducers';

export interface AppState {
  [fromShared.sharedFeature.name]: fromShared.SharedState;
  [routerFeatureKey]: RouterReducerState;
  [fromBooks.booksFeature.name]: fromBooks.BooksState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromShared.sharedFeature.name]: fromShared.sharedFeature.reducer,
  [routerFeatureKey]: routerReducer,
  [fromBooks.booksFeature.name]: fromBooks.booksFeature.reducer,
};
