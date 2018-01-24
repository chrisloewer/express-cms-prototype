import { Component, Input } from '@angular/core/';
import { Post } from '../../classes/post';

@Component({
  selector: 'app-homepage-view',
  templateUrl: './homepage-view.component.html',
  styleUrls: ['./homepage-view.component.scss']
})

export class HomepageViewComponent {

  @Input() post: Post;

  constructor() {}
}
