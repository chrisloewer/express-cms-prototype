import { Injectable } from '@angular/core';
import { Post } from '../../classes/post';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PostService {

  apiUrl = 'https://k6f9hug0pi.execute-api.us-west-2.amazonaws.com/test/postapi';

  constructor(
    private http: HttpClient
  ) { }

  getPost(): Observable<Post> {
    var p: Post =  {
      id: '0004',
      title: 'CMS Prototype',
      content: 'Chambray hell of hammock squid. Shaman cred PBR&B glossier marfa dreamcatcher. Typewriter banh pop-up, hella humblebrag pok pok leggings try-hard art party stumptown dreamcatcher kombucha. Adaptogen ethical keytar williamsburg schlitz gentrify farm-to-table taxidermy yuccie gochujang pok pok snackwave intelligentsia. ',
    }
    return this.http.get<Post>(this.apiUrl);
    // return of(p);
  }
}
