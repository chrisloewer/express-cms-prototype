import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private apiUrl = 'https://k6f9hug0pi.execute-api.us-west-2.amazonaws.com/test';

  constructor(
    private httpClient: HttpClient
  ) { }

  login(username, password): Observable<any> {
    const loginUrl = this.apiUrl + '/login';
    const httpOptions = {
      headers: new HttpHeaders(
      {
        'username': username,
        'password': password
      })
    };
    return this.httpClient.post(loginUrl, { content: null }, httpOptions);
  }
}
