import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, USER_PROVIDED_META_REDUCERS } from '@ngrx/store';

import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { globalFailureReducerFactory } from 'ngrx-loading-state';
import { AppComponent } from './app.component';
import { SimpleStoreModule } from './data-access/simple-store.module';
import { GlobalErrorHandler } from './error-handlers/global-error-handler';
import { globalFailureHandler } from './error-handlers/global-failure-handler';
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
    MatTabsModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: USER_PROVIDED_META_REDUCERS,
      useValue: [globalFailureReducerFactory(globalFailureHandler)]
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
