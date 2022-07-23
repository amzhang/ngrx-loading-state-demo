import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createIdLoadingStatesSelector, createLoadingStatesSelector } from 'ngrx-loading-state';
import { fetchItem, fetchUser } from './simple.actions';
import { itemAdapter, SimpleState, SIMPLE_FEATURE_KEY } from './simple.reducer';

const selectState = createFeatureSelector<SimpleState>(SIMPLE_FEATURE_KEY);
const selectLoadingStates = createLoadingStatesSelector(selectState);
const selectIdLoadingStates = createIdLoadingStatesSelector(selectState);

// Loading state selectors
export const fetchUserSelectors =
  fetchUser.createSelectors(selectLoadingStates);
export const fetchItemSelectors = fetchItem.createIdSelectors(selectIdLoadingStates);

// Date selectors
export const selectUser = createSelector(
  selectState,
  (state) => state.user
);

export const itemsSelectors = itemAdapter.getSelectors(createSelector(selectState, (state) => state.items));
export const selectItem = (id: string) => {
  return createSelector(itemsSelectors.selectEntities, (items) => {
    return items[id];
  });
};
