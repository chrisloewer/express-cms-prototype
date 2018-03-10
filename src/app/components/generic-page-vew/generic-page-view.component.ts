import { ActivatedRoute } from '@angular/router';
import {Component, Input, OnInit} from '@angular/core/';
import { Post } from '../../classes/post';
import {PostService} from '../../services/post/post.service';

@Component({
  selector: 'app-homepage-view',
  templateUrl: './generic-page-view.component.html',
  styleUrls: ['./generic-page-view.component.scss'],
  providers: [PostService]
})

export class GenericPageViewComponent implements OnInit {

  @Input() post: Post;
  pageId: String;

  // Get values for these from post,
  // but validate it before inserting into view to reduce logic in view
  title: String;
  body: String;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // if Post not passed in by edit component, load based on url
    if (!this.post) {
      this.route.params.subscribe(params => {
        this.pageId = params['id'];
        this.getPost();
      });
    }
  }

  getPost(): void {
    this.postService.getPost(this.pageId)
      .subscribe(
        (p) => {
          this.post = p;
          this.setViewValues();
        },
        (err) => console.warn(err)
      );
  }

  setViewValues(): void {
    this.title = this.post.title;
    this.body = this.post.contentBlocks['mainBody'].content;
  }
}
