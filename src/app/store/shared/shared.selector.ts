import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromShared from './shared.reducers';

export const getLoading = createSelector(
  fromShared.sharedFeature.selectSharedState,
  (state) => {
    return state.showLoading;
  }
);

export const getErrorMessage = createSelector(
  fromShared.sharedFeature.selectSharedState,
  (state) => {
    return state.errorMessage;
  }
);
