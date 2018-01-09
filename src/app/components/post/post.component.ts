import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../classes/post';
import { PostService } from '../../services/post/post.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    this.postService.getPost()
    .map((res: Response) => res.json())
    .subscribe(
      post => { this.post = post; },
      err => console.error(err),
      () => console.log('Loaded Posts')
    );
  }
}
