import { RouterStateUrl } from './custom-serializer';
import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const ROUTER_STATE_NAME = 'router';


export const getRouterState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>(ROUTER_STATE_NAME);

export const getCurrentRoute = createSelector(getRouterState, (router) => {
  return router.state;
});