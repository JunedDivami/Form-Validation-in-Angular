import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputselectorComponent } from './user-registration/inputselector/inputselector.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    InputselectorComponent,
    DisplaydataComponent,
    UserRegistrationComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
