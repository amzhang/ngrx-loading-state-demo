import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadAction, LoadingState } from 'ngrx-loading-state';
import { Observable } from 'rxjs';
import { fetchUser } from './simple.actions';
import { fetchUserSelectors, selectUserId } from './simple.selectors';

@Injectable()
export class SimpleFacade {
  constructor(private store: Store) {}

  // Dispatch actions
  fetchUser(options?: { forceFailure?: boolean } & LoadAction): void {
    this.store.dispatch(fetchUser.load(options || {}));
  }

  // Selectors
  getFetchUserState(): Observable<LoadingState> {
    return this.store.select(fetchUserSelectors.state);
  }

  getUserId(): Observable<string | undefined> {
    return this.store.select(selectUserId);
  }
}
