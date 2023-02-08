import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputselectorComponent } from './inputselector/inputselector.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';

@NgModule({
  declarations: [
    AppComponent,
    InputselectorComponent,
    DisplaydataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
