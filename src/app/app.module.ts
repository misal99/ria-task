import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterConfigurationModule } from './routing';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { CountryService } from './services/countryService';
import { AuthGaurd } from './services/authGaurd.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CountryListComponent,
  ],
  imports: [
    BrowserModule,
    RouterConfigurationModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AuthenticationService, CountryService, AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
