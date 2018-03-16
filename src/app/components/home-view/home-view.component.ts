import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { Post } from '../../classes/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
  providers: [PostService]
})
export class HomeViewComponent implements OnInit {

  @Input() post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // if Post not passed in by edit component, load home page
    if (!this.post) {
      this.route.params.subscribe(() => {
        this.getPost();
      });
    }
  }

  getPost(): void {
    this.postService.getPost('00005')
      .subscribe(
        (p) => this.post = p,
        (err) => console.warn(err)
      );
  }

  getContent(contentBlockId): String {
    try {
      return this.post.contentBlocks.filter(function (block) {
        return block.id === contentBlockId;
      })[0].content;
    } catch (e) { }
    return 'Loading...';
  }

}
