import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { SimpleStoreModule } from './data-access/simple-store.module';
import { IdLoadingStateDemoModule } from './id-loading-state-demo/id-loading-state-demo.module';
import { LoadingStateDemoModule } from './loading-state-demo/loading-state-demo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      serialize: {
        // This allows the contents of non-serializable types such as "set" and "map" to be displayed.
        options: true
      }
    }),
    SimpleStoreModule,
    LoadingStateDemoModule,
    IdLoadingStateDemoModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
