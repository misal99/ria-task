import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/services/countryService';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  loading = false;
  countries: any[];

  constructor(private service: CountryService) { }

  ngOnInit() {
      this.loading = true;
      this.service.getAll().subscribe(countries => {
          this.loading = false;
          this.countries = countries;
      });
  }

}
