import { Injectable } from '@angular/core';
import { Post } from '../../classes/post';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class PostService {

  private apiUrl = 'https://k6f9hug0pi.execute-api.us-west-2.amazonaws.com/test';

  constructor(
    private http: HttpClient
  ) { }

  getPost(): Observable<Post> {
    const postUrl = this.apiUrl + '/postapi';

    return this.http
      .get<Post>(postUrl);
  }
}
