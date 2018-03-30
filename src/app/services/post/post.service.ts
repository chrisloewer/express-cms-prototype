import { Injectable } from '@angular/core';
import { Post } from '../../classes/post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class PostService {


  constructor(
    private http: HttpClient
  ) { }

  getPost(id): Observable<Post> {
    const postUrl = environment.apiUrl + '/postapi/' + id;
    return this.http.get<Post>(postUrl);
  }

  setPost(p: Post): Observable<any> {
    const postUrl = environment.apiUrl + '/postapi';
    return this.http.post(postUrl, p);
  }
}
