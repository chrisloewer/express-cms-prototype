import { Component, OnInit } from '@angular/core';
import { Post } from '../../classes/post';
import { PostService } from '../../services/post/post.service';
import { PostAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.scss'],
  providers: [PostService],
  animations: PostAnimations
})

export class PageEditComponent implements OnInit {

  post: Post = new Post;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    this.postService.getPost()
      .subscribe(
        (p) => this.post = new Post(p),
        (err) => console.warn(err)
      );
  }

  setPost(): void {
    this.postService.setPost(this.post)
      .subscribe(
        (res) => console.log(res),
        (err) => console.warn(err)
      );
  }

}
