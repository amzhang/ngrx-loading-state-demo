import { FailureAction, LoadingState } from "ngrx-loading-state";

export function globalFailureHandler(failureAction: FailureAction, _state: LoadingState) {
  // Using setTimeout to ensure this doesn't stop code flow and impact downstream processing.
  setTimeout(() => {
    throw Error(failureAction.error);
  })
}
