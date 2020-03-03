import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(`https://restcountries.eu/rest/v2/all`);
  }
}

export interface ICountry {
  flag: string;
  name: string;
  capital: string;
  region: string;
}
