import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ItemDetailComponent } from './item-detail.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule],
  declarations: [ItemDetailComponent],
  exports: [ItemDetailComponent],
})
export class ItemDetailModule {}
