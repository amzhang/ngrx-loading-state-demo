import {
  createIdLoadingActions,
  createLoadingActions,
  failure,
  idFailure,
  idLoad,
  idSuccess,
  load,
  success,
} from 'ngrx-loading-state';

export const fetchUser = createLoadingActions(
  'Fetch User',
  load<{ forceFailure?: boolean }>(),
  success<{ userId: string }>(),
  failure<{}>()
);

// export const fetchIdCount = createIdLoadingActions(
//   'Fetch Id Count',
//   idLoad<{ count: number; forceFailure?: boolean }>(),
//   idSuccess<{ count: number }>(),
//   idFailure<{}>()
// );
