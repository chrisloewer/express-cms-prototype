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

  errMsg: string;
  fileDataUri: string;
  fileLabel = 'Upload File';
  images: Image[];
  loading = true;
  acceptedMimeTypes = [
    'image/gif',
    'image/jpeg',
    'image/png'
  ];

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
      const file = fileEvent.target['files'][0];
      this.fileLabel = file.name;
      this.errMsg = '';
      this.fileDataUri = '';

      if (file && this.validateFile(file)) {

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.fileDataUri = reader.result;
        };
      } else {
        this.errMsg = 'File must be jpg, png, or gif and cannot be exceed 500 KB in size';
      }
    } catch (e) {
      this.errMsg = 'An error has occurred.  Please try again.';
    }
  }

  validateFile(file): boolean {
    return this.acceptedMimeTypes.includes(file.type) && file.size < 500000;
  }
}

