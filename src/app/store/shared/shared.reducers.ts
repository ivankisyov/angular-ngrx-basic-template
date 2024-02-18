import { setLoading, setErrorMessage } from './shared.actions';
import { createFeature, createReducer, on } from '@ngrx/store';

export interface SharedState {
  showLoading: boolean;
  errorMessage: string;
}

export const initialState: SharedState = {
  showLoading: false,
  errorMessage: '',
};

const reducer = createReducer(
  initialState,
  on(setLoading, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(setErrorMessage, (state, action) => {
    return {
      ...state,
      errorMessage: action.message,
    };
  })
);

export const sharedFeature = createFeature({
  name: 'shared',
  reducer,
});
