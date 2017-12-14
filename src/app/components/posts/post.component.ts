import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './post.component.html',
  styleUrls: ['../../../assets/posts/app.component.css']
})
export class PostComponent {
  title = 'CMS Prototype';
  pageContent = 'Chambray hell of hammock squid. Shaman cred PBR&B glossier marfa dreamcatcher. Typewriter banh pop-up,' +
    'hella humblebrag pok pok leggings try-hard art party stumptown dreamcatcher kombucha. Adaptogen ethical keytar,' +
    'williamsburg schlitz gentrify farm-to-table taxidermy yuccie gochujang pok pok snackwave intelligentsia. ';
  pageTitle = 'Lorem Hipsum';
}