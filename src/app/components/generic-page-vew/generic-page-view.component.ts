import {Component, Input, OnInit} from '@angular/core/';
import { Post } from '../../classes/post';
import {PostService} from '../../services/post/post.service';

@Component({
  selector: 'app-homepage-view',
  templateUrl: './generic-page-view.component.html',
  styleUrls: ['./generic-page-view.component.scss'],
  providers: [PostService]
})

export class HomepageViewComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    if (this.post) {
      console.log(this.post);
    } else {
      console.log('No Post Input');
      this.post = new Post();
      this.getPost();
    }
  }

    getPost(): void {
      this.postService.getPost()
        .subscribe(
          (p) => this.post = new Post(p),
          (err) => console.warn(err)
        );
    }
}
