import { Component, Input } from '@angular/core/';
import { Post } from '../../classes/post';

@Component({
  selector: 'app-homepage-view',
  templateUrl: './homepageView.component.html',
  styleUrls: ['./homepageView.component.scss']
})

export class HomepageViewComponent {

  @Input() post: Post;

  constructor() {}
}
