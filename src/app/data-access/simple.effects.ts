import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filterLoading } from 'ngrx-loading-state';
import { delay, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { fetchItem, fetchUser } from './simple.actions';
import { fetchItemSelectors, fetchUserSelectors } from './simple.selectors';

@Injectable()
export class SimpleEffects {
  static userApiCalls = 0;
  static itemApiCalls = 0;

  constructor(private actions$: Actions, private store: Store) {}

  fetchCount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchUser.load),
      filterLoading(this.store.select(fetchUserSelectors.state)),
      switchMap((action) => {
        SimpleEffects.userApiCalls += 1;

        const user = `fetched from API call number ${SimpleEffects.userApiCalls}`;

        return of(true).pipe(
          delay(5000),
          map(() => {
            if (action.forceFailure) {
              throw new Error('Forced failure');
            }
            return fetchUser.success({
              user,
            });
          }),
          fetchUser.catchError()
        );
      })
    );
  });

  fetchItem$ = fetchItem.createEffect(this.actions$, (idActions$, id) => {
    return idActions$.pipe(
      filterLoading(this.store.select(fetchItemSelectors.state(id))),
      switchMap((action) => {
        SimpleEffects.itemApiCalls += 1;
        const content = `item ${id} fetched from API call number  ${SimpleEffects.itemApiCalls}`;

        return of(true).pipe(
          delay(3000), // Ensure yielding into event loop.
          map(() => {
            return fetchItem.idSuccess({
              id,
              item: {
                id,
                content
              }
            });
          }),
          fetchItem.catchError(id)
        );
      })
    );
  });
}
