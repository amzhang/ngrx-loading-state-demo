import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingStateDemoComponent } from './loading-state-demo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingStateDemoComponent],
  exports: [LoadingStateDemoComponent],
})
export class LoadingStateDemoModule {}
