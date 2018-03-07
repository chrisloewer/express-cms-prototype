import { Component, OnInit } from '@angular/core';
import { Post } from '../../classes/post';
import { PostService } from '../../services/post/post.service';
import { PostAnimations } from './animations';
import { MatSnackBar } from '@angular/material';
import { PageDetails } from '../../classes/page-details';
import { PageDetailsService } from '../../services/page-details/page-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.scss'],
  providers: [PageDetailsService, PostService],
  animations: PostAnimations
})

export class PageEditComponent implements OnInit {

  post: Post = new Post;
  testPost: Post;
  pageDetails: PageDetails;

  constructor(
    private postService: PostService,
    private pageDetailsService: PageDetailsService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    // this.getPost();
    // this.getPageDetails(); // TODO add ID to know what PageDetails to get
    this.testPost = new Post( {
      id: 'postId',
      title: 'Test Post',
      content: 'Test content will go here'
    });
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
        (res) => {
          console.log(res);
          this.showSnackbar('Save Complete!');
        },
        (err) => console.warn(err)
      );
  }

  getPageDetails(): void {
    this.pageDetailsService.getPageDetails().subscribe(
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
