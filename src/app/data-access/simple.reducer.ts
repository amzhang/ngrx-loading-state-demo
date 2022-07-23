import { createReducer } from '@ngrx/store';
import { WithLoadingStates, getInitialState } from 'ngrx-loading-state';
import { fetchUser } from './simple.actions';

export const SIMPLE_FEATURE_KEY = 'simple';

export type SimpleState = WithLoadingStates & {
  userId?: string;
};

export const initialState: SimpleState = {
  ...getInitialState(),
};

export const simpleReducer = createReducer(
  initialState,
  ...fetchUser.reducer<SimpleState>({
    onSuccess: (state, { userId }): SimpleState => {
      return {
        ...state,
        userId,
      };
    },
  })
);
