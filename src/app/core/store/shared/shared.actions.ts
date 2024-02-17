import { createAction, props } from '@ngrx/store';
export const SET_LOADING = '[Shared] Set Loading Spinner';
export const SET_ERROR_MESSAGE = '[Shared] Set Error Message';

export const setLoading = createAction(
  SET_LOADING,
  props<{ status: boolean }>()
);

export const setErrorMessage = createAction(
  SET_ERROR_MESSAGE,
  props<{ message: string }>()
);