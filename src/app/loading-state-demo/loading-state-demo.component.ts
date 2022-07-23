import { Component } from '@angular/core';
import { MAX_AGE_LATEST } from 'ngrx-loading-state';
import { SimpleFacade } from '../data-access/simple.facade';

@Component({
  selector: 'loading-state-demo',
  templateUrl: './loading-state-demo.component.html',
  styleUrls: ['./loading-state-demo.component.scss'],
})
export class LoadingStateDemoComponent {
  fetchUserState$ = this.simpleFacade.getFetchUserState();
  user$ = this.simpleFacade.getUser();

  constructor(private simpleFacade: SimpleFacade) {
    this.simpleFacade.fetchUser({});
    console.log('123');
  }

  onReload(): void {
    this.simpleFacade.fetchUser({});
  }

  onReloadLatest(): void {
    this.simpleFacade.fetchUser({ maxAge: MAX_AGE_LATEST });
  }

  onReloadMaxAge(): void {
    this.simpleFacade.fetchUser({ maxAge: 5000 });
  }

  onReloadForceError(): void {
    this.simpleFacade.fetchUser({ forceFailure: true });
  }
}
