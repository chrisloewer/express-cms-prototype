import { Component, OnInit } from '@angular/core';
import { Image } from '../../classes/image';
import { PostService } from '../../services/post/post.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-image-gallery-modal',
  templateUrl: './image-gallery-modal.component.html',
  styleUrls: ['./image-gallery-modal.component.scss'],
  providers: [PostService]
})
export class ImageGalleryModalComponent implements OnInit {

  images: Image[];
  loading = true;

  constructor(
    private postService: PostService,
    public dialogRef: MatDialogRef<ImageGalleryModalComponent>
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

  returnImage(src: string): void {
    this.dialogRef.close(src);
  }
}
