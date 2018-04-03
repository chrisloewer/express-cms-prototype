import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  fileLabel = 'Upload File';

  constructor() { }

  ngOnInit() {
  }

  fileSelected(fileEvent: Event): void {
    try {
      this.fileLabel = fileEvent.target['files'][0].name;
    } catch (e) {}
  }
}

