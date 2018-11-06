import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ZipcodeEffects } from './effects/zipcode.effects';
import { StatePreviewComponent } from './state-preview/state-preview.component';
import { ZipcodeInputComponent } from './zipcode-input/zipcode-input.component';

@NgModule({
  declarations: [
    AppComponent,
    StatePreviewComponent,
    ZipcodeInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([ZipcodeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
