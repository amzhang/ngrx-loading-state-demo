import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filterLoading } from 'ngrx-loading-state';
import { of, delay } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { fetchUser } from './simple.actions';
import { fetchUserSelectors } from './simple.selectors';

@Injectable()
export class SimpleEffects {
  static apiCalls = 0;

  constructor(private actions$: Actions, private store: Store) {}

  fetchCount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchUser.load),
      filterLoading(this.store.select(fetchUserSelectors.state)),
      switchMap((action) => {
        SimpleEffects.apiCalls += 1;

        return of(true).pipe(
          delay(5000),
          map(() => {
            if (action.forceFailure) {
              throw new Error('Forced failure');
            }
            return fetchUser.success({
              userId: `fetched from API call number ${SimpleEffects.apiCalls}`,
            });
          }),
          fetchUser.catchError()
        );
      })
    );
  });

  // fetchIdCount$ = fetchIdCount.createEffect(this.actions$, (idActions$, id) => {
  //   return idActions$.pipe(
  //     filterLoading(this.store.select(fetchIdCountSelectors.state(id))),
  //     switchMap((action) => {
  //       SimpleEffects.apiCalls += 1;
  //       return of(true).pipe(
  //         delay(1), // Ensure yielding into event loop.
  //         map(() => {
  //           if (action.forceFailure) {
  //             throw new Error('Forced failure');
  //           }
  //           return fetchIdCount.idSuccess({ id, count: action.count });
  //         }),
  //         fetchIdCount.catchError(id)
  //       );
  //     })
  //   );
  // });
}
