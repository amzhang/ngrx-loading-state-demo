import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule
} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {
  MatProgressSpinnerModule
} from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { IdLoadingStateDemoComponent } from './id-loading-state-demo.component';
import { ItemDetailModule } from './item-detail/item-detail.module';

@NgModule({
  imports: [CommonModule, MatListModule, MatProgressSpinnerModule, MatButtonModule, MatRadioModule, ItemDetailModule, MatProgressSpinnerModule],
  declarations: [IdLoadingStateDemoComponent],
  exports: [IdLoadingStateDemoComponent],
})
export class IdLoadingStateDemoModule {}
