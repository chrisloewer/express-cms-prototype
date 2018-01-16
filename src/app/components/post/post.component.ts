import { Component, Input, OnInit } from '@angular/core';
// import { trigger, state, style, animate, transition, query, stagger, animateChild } from '@angular/animations';
import { Post } from '../../classes/post';
import { PostService } from '../../services/post/post.service';
import { PostAnimations } from '../post/animations';

@Component({
  selector: 'app-root',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService],
  animations: PostAnimations
})

export class PostComponent implements OnInit {

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