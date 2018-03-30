import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../classes/user';

@Injectable()
export class AuthService {

  private apiUrl = 'https://k6f9hug0pi.execute-api.us-west-2.amazonaws.com/test';

  constructor(
    private httpClient: HttpClient
  ) { }

  // Store user token and info locally for re-usability
  static storeLocalUser(user: User): void {
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  static loadLocalUser(): User {
    let user: User;
    try {
      user = JSON.parse(localStorage.getItem('userInfo'));
    } catch (e) {
      user = new User();
    }
    return user;
  }

  // Contact API.  If user exists, it will return JWT token
  login(username, password): Observable<User> {
    const loginUrl = this.apiUrl + '/login';
    const httpOptions = {
      headers: new HttpHeaders(
      {
        'username': username,
        'password': password
      })
    };
    return this.httpClient.post<User>(loginUrl, { content: null }, httpOptions);
  }

}
