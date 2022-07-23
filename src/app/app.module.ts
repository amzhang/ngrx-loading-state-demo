import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SimpleStoreModule } from './data-access/simple-store.module';
import { LoadingStateDemoModule } from './loading-state-demo/loading-state-demo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    SimpleStoreModule,
    LoadingStateDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
