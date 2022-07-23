import { Component } from '@angular/core';
import { SimpleFacade } from '../data-access/simple.facade';

@Component({
  selector: 'id-loading-state-demo',
  templateUrl: './id-loading-state-demo.component.html',
  styleUrls: ['./id-loading-state-demo.component.scss'],
})
export class IdLoadingStateDemoComponent {
  readonly itemIds = ["1", "2", "3"];

  combinedState$ = this.simpleFacade.getFetchItemCombinedState();
 
  constructor( private simpleFacade: SimpleFacade) {
  }
}
