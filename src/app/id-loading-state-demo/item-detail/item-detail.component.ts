import { Component, Input, OnInit } from '@angular/core';
import { IdLoadingState, MAX_AGE_LATEST } from 'ngrx-loading-state';
import { Observable } from 'rxjs';
import { SimpleFacade } from '../../data-access/simple.facade';
import { Item } from '../../data-access/simple.reducer';

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
