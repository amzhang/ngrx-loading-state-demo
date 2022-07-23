import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SimpleEffects } from './simple.effects';
import { SimpleFacade } from './simple.facade';
import { simpleReducer, SIMPLE_FEATURE_KEY } from './simple.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(SIMPLE_FEATURE_KEY, simpleReducer),
    EffectsModule.forFeature([SimpleEffects]),
  ],
  providers: [SimpleFacade],
})
export class SimpleStoreModule {}
