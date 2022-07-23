import { Component, Input, OnInit } from '@angular/core';
import { MAX_AGE_LATEST } from 'ngrx-loading-state';
import { IdLoadingState } from 'ngrx-loading-state/lib/id-loading-state/id-loading-state-types';
import { Observable } from 'rxjs';
import { Item } from 'src/app/data-access/simple.reducer';
import { SimpleFacade } from '../../data-access/simple.facade';

@Component({
  selector: 'item-detail[itemId]',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  @Input() itemId!: string;

  fetchItemState$!: Observable<IdLoadingState>;
  item$!: Observable<Item | undefined>;

  constructor(private simpleFacade: SimpleFacade) {
  }

  ngOnInit(): void {
    this.fetchItemState$ = this.simpleFacade.getFetchItemState(this.itemId);
    this.item$ = this.simpleFacade.getItem(this.itemId); 
  }

  reload(): void {
    this.simpleFacade.fetchItem({ id: this.itemId, maxAge: MAX_AGE_LATEST });
  }
} 
