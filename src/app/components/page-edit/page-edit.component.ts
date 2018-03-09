import { Component, OnInit } from '@angular/core';
import { Post } from '../../classes/post';
import { PostService } from '../../services/post/post.service';
import { PostAnimations } from './animations';
import { MatSnackBar } from '@angular/material';
import { PageDetails } from '../../classes/page-details';
import { PageDetailsService } from '../../services/page-details/page-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.scss'],
  providers: [PageDetailsService, PostService],
  animations: PostAnimations
})

export class PageEditComponent implements OnInit {

  post: Post = new Post;
  pageDetails: PageDetails;
  pageId: String;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private pageDetailsService: PageDetailsService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params['id'];
      if (this.pageId !== undefined) {
        this.getPageDetails();
        this.getPost();
      }
    });
  }

  getPost(): void {
    this.postService.getPost(this.pageId)
      .subscribe(
        (p) => this.post = new Post(p),
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

  getPageDetails(): void {
    this.pageDetailsService.getPageDetails(this.pageId)
      .subscribe(
        (details) => this.pageDetails = details,
        (err) => console.warn(err)
      );
  }

  logPageDetails(): void {
    console.log(this.pageDetails);
  }

  showSnackbar(msg: string) {
    msg = msg ? msg : 'Success!';
    this.snackBar.open(
      msg,
      'clear',
      { duration: 2000 });
  }

}
