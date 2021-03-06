import { Component, OnInit } from '@angular/core';
import { Post } from '../../classes/post';
import { PostService } from '../../services/post/post.service';
import { PostAnimations } from './animations';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../../classes/page';

@Component({
  selector: 'app-root',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.scss'],
  providers: [PostService],
  animations: PostAnimations
})

export class PageEditComponent implements OnInit {

  page: Page = new Page;
  post: Post = new Post;
  pageId: String;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params['id'];
      if (this.pageId !== undefined) {
        this.getPost();
      }
    });
  }

  getPost(): void {
    this.postService.getPost(this.pageId)
      .subscribe(
        (p) => this.post = p,
        (err) => console.warn(err)
      );
  }

  setPost(): void {
    this.postService.setPost(this.post)
      .subscribe(
        (res) => {
          console.log(res);
          this.showSnackbar('Save Complete!');
        },
        (err) => console.warn(err)
      );
  }

  // Used to bind Emitter results to contentBlock.content
  setContent(contentBlock, event) {
    contentBlock.content = event;
  }

  showSnackbar(msg: string) {
    msg = msg ? msg : 'Success!';
    this.snackBar.open(
      msg,
      'clear',
      { duration: 2000 });
  }

}
