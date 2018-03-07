import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PageDetails } from '../../classes/page-details';

@Injectable()
export class PageDetailsService {

  private apiUrl = 'https://k6f9hug0pi.execute-api.us-west-2.amazonaws.com/test/pagedetails';

  constructor(
    private http: HttpClient
  ) { }

  getPageDetails(): Observable<PageDetails> {
    return this.http.get<PageDetails>(this.apiUrl);
  }
}