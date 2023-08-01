import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestCountriesService {

  private apiUrl = 'https://restcountries.com/v3.1/'; // Replace with your API URL

  constructor(private http: HttpClient) { }
  
  
  getDataContinents(): Observable<any> {
    const url = `${this.apiUrl}all`;
    return this.http.get<any>(url);
  }
  dataOfContinent(continent:string): Observable<any> {
    const url = `${this.apiUrl}region/${continent}`;
    return this.http.get<any>(url);
  }
}
