import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from './pages/login/login.component';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { AuthGaurd } from './services/authGaurd.service';

const routing: Route[] = [
  { path: '', component: CountryListComponent, canActivate: [AuthGaurd] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routing,
    ),
  ],
  exports: [
    RouterModule,
  ],
})
export class RouterConfigurationModule { }
