import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { SHARED_STATE_NAME } from './shared/shared.selector';
import { SharedState } from './shared/shared.state';
import { sharedReducer } from './shared/shared.reducer';
import { ROUTER_STATE_NAME } from './router/router.selector';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [ROUTER_STATE_NAME]: RouterReducerState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: sharedReducer,
  [ROUTER_STATE_NAME]: routerReducer,
};