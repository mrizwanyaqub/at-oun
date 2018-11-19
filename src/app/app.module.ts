import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AtProvidersModule, AtWidgetsModule } from  'at-common-fe';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { environment } from '../environments/environment';
import { Configs } from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    AtProvidersModule.forRoot(environment),
    AtWidgetsModule
  ],
  providers: [
    {
      provide: Configs,
      useValue: environment
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
