import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createLoadingStatesSelector } from 'ngrx-loading-state';
import { fetchUser } from './simple.actions';
import { SimpleState, SIMPLE_FEATURE_KEY } from './simple.reducer';

const selectState = createFeatureSelector<SimpleState>(SIMPLE_FEATURE_KEY);
const selectLoadingStates = createLoadingStatesSelector(selectState);

// Loading state selectors
export const fetchUserSelectors =
  fetchUser.createSelectors(selectLoadingStates);

// Date selectors
export const selectUserId = createSelector(
  selectState,
  (state) => state.userId
);
