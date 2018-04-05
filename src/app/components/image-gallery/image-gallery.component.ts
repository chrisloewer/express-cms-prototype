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
  fileLabel: string;
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
    } catch (e) {}
  }

  validateFile(file): boolean {
    return this.acceptedMimeTypes.includes(file.type) && file.size < 500000;
  }

  uploadImage(): void {
    console.log('Upload Image');
    this.postService.uploadImage(this.fileDataUri)
      .subscribe(
        (res) => {
          this.loadImages();
          this.fileLabel = '';
          this.errMsg = '';
          this.fileDataUri = '';
          // TODO add success snackbox
        },
        (err) => {
          console.log('Error', err);
          this.errMsg = 'An error occurred while adding this image.  Please try again.';
        }
      );
  }

  deleteImage(imageName: string): void {
    console.log('Delete Image: ', imageName);
    this.postService.deleteImage(imageName)
      .subscribe(
        (res) => {
          this.loadImages();
        },
        (err) => {
          console.log('Error', err);
          this.errMsg = 'An error occurred while deleting this image.  Please try again.';
        }
      );
  }
}

