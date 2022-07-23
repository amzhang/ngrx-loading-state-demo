import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadAction, LoadingState } from 'ngrx-loading-state';
import { IdLoadAction, IdLoadingState } from 'ngrx-loading-state/lib/id-loading-state/id-loading-state-types';
import { CombinedLoadingState } from 'ngrx-loading-state/lib/loading-state/loading-state-types';
import { Observable } from 'rxjs';
import { fetchItem, fetchUser } from './simple.actions';
import { Item } from './simple.reducer';
import { fetchItemSelectors, fetchUserSelectors, selectItem, selectUser } from './simple.selectors';

@Injectable()
export class SimpleFacade {
  constructor(private store: Store) {}

  // Dispatch actions
  fetchUser(options: { forceFailure?: boolean } & LoadAction): void {
    this.store.dispatch(fetchUser.load(options));
  }

  fetchItem(options: IdLoadAction): void {
    this.store.dispatch(fetchItem.idLoad(options));
  }


  // Loading state selectors
  getFetchUserState(): Observable<LoadingState> {
    return this.store.select(fetchUserSelectors.state);
  }

  getFetchItemState(id: string): Observable<IdLoadingState> {
    return this.store.select(fetchItemSelectors.state(id));
  }

  getFetchItemCombinedState(): Observable<CombinedLoadingState> {
    return this.store.select(fetchItemSelectors.combinedState);
  }


  // Data selectors
  getUser(): Observable<string | undefined> {
    return this.store.select(selectUser);
  }

  getItem(id: string): Observable<Item | undefined> {
    return this.store.select(selectItem(id));
  }
}
