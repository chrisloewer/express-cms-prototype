import { Injectable } from '@angular/core';
import { Post } from '../../classes/post';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PostService {

  constructor() { }

  getPost(): Observable<Post> {
    var p: Post =  {
      id: '0004',
      title: 'CMS Prototype',
      content: 'Chambray hell of hammock squid. Shaman cred PBR&B glossier marfa dreamcatcher. Typewriter banh pop-up, hella humblebrag pok pok leggings try-hard art party stumptown dreamcatcher kombucha. Adaptogen ethical keytar williamsburg schlitz gentrify farm-to-table taxidermy yuccie gochujang pok pok snackwave intelligentsia. ',
    }
    return of(p);
  }
}
