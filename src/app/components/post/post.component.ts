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
    trigger('toggleEdit', [
      state('default', style({
        backgroundColor: '#222222'
      })),
      state('edit', style({
        backgroundColor: '#999999'
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
    .subscribe( (post) => { this.post = post; } );
  }

  toggleState(p: Post): void {
    p.state = p.state === 'default' ? 'edit' : 'default';
    console.log(p.state);
  }
}
