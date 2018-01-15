import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../classes/post';
import { PostService } from '../../services/post/post.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService],
  animations: [
    trigger('editTrigger', [
      state('default', style({
        flexGrow: 1
      })),
      state('edit', style({
        flexGrow: 1
      })),
      state('preview', style({
        flexGrow: 0
      })),
    transition('* <=> *', animate('800ms ease-out'))
    ]),

    trigger('previewTrigger', [
      state('default', style({
        flexGrow: 1
      })),
      state('edit', style({
        flexGrow: 0
      })),
      state('preview', style({
        flexGrow: 1
      })),
    transition('* <=> *', animate('800ms ease-out'))
    ])
  ]
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
}
