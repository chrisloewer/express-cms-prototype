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

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.post) {
      console.log(this.post);
    } else {
      console.log('No Post Input');
      this.route.params.subscribe(params => {
        this.pageId = params['id'];
        this.getPost();
      });
    }
  }

    getPost(): void {
      this.postService.getPost(this.pageId)
        .subscribe(
          (p) => this.post = new Post(p),
          (err) => console.warn(err)
        );
    }
}
