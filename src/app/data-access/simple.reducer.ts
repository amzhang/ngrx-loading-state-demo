import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer } from '@ngrx/store';
import { getInitialState, WithLoadingStates } from 'ngrx-loading-state';
import { fetchItem, fetchUser } from './simple.actions';

export const SIMPLE_FEATURE_KEY = 'simple';

export interface Item {
  id: string;
  content: string;
}

export type SimpleState = WithLoadingStates & {
  user?: string;
  items: EntityState<Item>;
};

export const itemAdapter = createEntityAdapter<Item>();

export const initialState: SimpleState = {
  ...getInitialState(),
  items: itemAdapter.getInitialState()
};

export const simpleReducer = createReducer(
  initialState,
  ...fetchUser.reducer<SimpleState>({
    onSuccess: (state, { user }): SimpleState => {
      return {
        ...state,
        user,
      };
    },
  }),
  ...fetchItem.reducer<SimpleState>({
    onSuccess: (state, { item }): SimpleState => {
      return {
        ...state,
        items: itemAdapter.upsertOne(item, state.items)
      };
    },
  })
);
