import { Injectable } from '@angular/core';
import { Post } from '../../classes/post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  private apiUrl = 'https://k6f9hug0pi.execute-api.us-west-2.amazonaws.com/test/postapi';

  constructor(
    private http: HttpClient
  ) { }

  getPost(): Observable<Post> {
    const postUrl = this.apiUrl + '/00001';

    return this.http
      .get<Post>(postUrl);
  }

  setPost(p: Post): Observable<any> {
    const postUrl = this.apiUrl;

    return this.http.post(postUrl, p);
  }
}
