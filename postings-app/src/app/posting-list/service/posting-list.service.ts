import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostingListService {

  constructor(private httpClient: HttpClient) { }

  getCountryList(): Observable<HttpResponse<any>> {
    return this.httpClient.get<any>('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code', { observe: 'response' });
  }
  getDepartmentList(): Observable<HttpResponse<any>> {
    return this.httpClient.get<any>( environment.apiUrl + '/departments', { observe: 'response' });
  }
  getPostingList(country: string, department: string): Observable<HttpResponse<any>> {
    return this.httpClient.get<any>(
      environment.apiUrl + `/postings?country=${country}&department=${department}`,
      { observe: 'response' });
  }
}
