import { Component, OnInit } from '@angular/core';
import { Image } from '../../classes/image';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
  providers: [PostService]
})
export class ImageGalleryComponent implements OnInit {

  fileLabel = 'Upload File';
  images: Image[];
  loading = true;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.loadImages();
  }

  loadImages(): void {
    this.postService.getGallery()
      .subscribe(
        (gallery) => {
          this.images = gallery;
          this.loading = false;
        },
        (err) => {
          console.warn(err);
          this.loading = false;
        }
      );
  }

  fileSelected(fileEvent: Event): void {
    try {
      this.fileLabel = fileEvent.target['files'][0].name;
    } catch (e) {}
  }
}

