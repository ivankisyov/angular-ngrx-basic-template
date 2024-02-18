import { createAction, props } from '@ngrx/store';

export const setLoading = createAction(
  '[Shared] Set Loading Spinner',
  props<{ status: boolean }>()
);

export const setErrorMessage = createAction(
  '[Shared] Set Error Message',
  props<{ message: string }>()
);
