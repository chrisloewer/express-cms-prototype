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
    .subscribe( (p) => { this.post = new Post(p); } );
  }

  toggleMode(p: Post, modeValue?: string): void {  // Valid Options: default, edit, preview

    modeValue = modeValue || 'default';
    switch (modeValue) {
      case 'edit': {
        p.mode = 'edit';
        break;
      }
      case 'preview': {
        p.mode = 'preview';
        break;
      }
      default: {
        p.mode = 'default';
      }
    }
    console.log(p.mode);
  }

  isEditVisible(): boolean {
    return this.post.mode !== 'preview' ? true : false;
  }

  isPreviewVisible(): boolean {
    return this.post.mode !== 'edit' ? true : false;
  }

}