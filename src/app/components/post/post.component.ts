import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../classes/post';
import { PostService } from '../../services/post/post.service';

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
      .subscribe(post => this.post = post);
  }
}
