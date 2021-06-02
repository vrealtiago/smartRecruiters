import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostingDetailsService {

  constructor(private httpClient: HttpClient) { }

  getPostingDetails(id: string | null): Observable<HttpResponse<any>> {
    return this.httpClient.get<any>(
      environment.apiUrl + `/postings/${id}`,
      { observe: 'response' });
  }
}
