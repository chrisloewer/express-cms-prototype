import { Component, Input } from "@angular/core/";
import { Post } from "../../classes/post";


@Component({
  selector: 'homepage-view',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent {
  
  @Input() post: Post;

  constructor() {}
}