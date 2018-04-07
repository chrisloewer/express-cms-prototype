import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { GenericPageViewComponent } from '../components/generic-page-vew/generic-page-view.component';
import { HomeViewComponent } from '../components/home-view/home-view.component';
import { PageEditComponent } from '../components/page-edit/page-edit.component';
import { QuillComponent } from '../components/quill/quill.component';
import { MaterialModule } from './material.module';
import { ImageGalleryComponent } from '../components/image-gallery/image-gallery.component';
import { ImageGalleryModalComponent } from '../components/image-gallery-modal/image-gallery-modal.component';
import { ImageInputComponent } from '../components/image-input/image-input.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    QuillModule,
  ],
  exports: [
    GenericPageViewComponent,
    HomeViewComponent,
    ImageGalleryComponent,
    ImageGalleryModalComponent,
    ImageInputComponent,
    PageEditComponent,
    QuillComponent
  ],
  declarations: [
    GenericPageViewComponent,
    HomeViewComponent,
    ImageGalleryComponent,
    ImageGalleryModalComponent,
    ImageInputComponent,
    PageEditComponent,
    QuillComponent
  ],
  entryComponents: [ImageGalleryModalComponent]
})
export class EditViewModule {}
