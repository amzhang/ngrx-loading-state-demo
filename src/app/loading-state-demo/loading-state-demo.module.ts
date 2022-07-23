import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule
} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {
  MatProgressSpinnerModule
} from '@angular/material/progress-spinner';
import { LoadingStateDemoComponent } from './loading-state-demo.component';

@NgModule({
  imports: [CommonModule, MatListModule, MatProgressSpinnerModule, MatButtonModule],
  declarations: [LoadingStateDemoComponent],
  exports: [LoadingStateDemoComponent],
})
export class LoadingStateDemoModule {}
