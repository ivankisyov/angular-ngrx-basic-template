import { RouterStateUrl } from './custom-serializer';
import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const routerFeatureKey = 'router';

export const getRouterState =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>(routerFeatureKey);

export const getCurrentRoute = createSelector(getRouterState, (router) => {
  return router.state;
});
