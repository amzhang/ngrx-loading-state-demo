import {
  createIdLoadingActions,
  createLoadingActions,
  failure,
  idFailure,
  idLoad,
  idSuccess,
  load,
  success
} from 'ngrx-loading-state';
import { Item } from './simple.reducer';

export const fetchUser = createLoadingActions(
  'Fetch User',
  load<{ forceFailure?: boolean }>(),
  success<{ user: string }>(),
  failure<{}>()
);

export const fetchItem = createIdLoadingActions(
  'Fetch Item',
  idLoad<{}>(),
  idSuccess<{ item: Item }>(),
  idFailure<{}>()
);
