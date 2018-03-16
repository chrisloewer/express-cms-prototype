import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../app.module';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { GenericPageViewComponent } from '../components/generic-page-vew/generic-page-view.component';
import { HomeViewComponent } from '../components/home-view/home-view.component';
import { PageEditComponent } from '../components/page-edit/page-edit.component';
import { QuillComponent } from '../components/quill/quill.component';

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
    PageEditComponent,
    QuillComponent
  ],
  declarations: [
    GenericPageViewComponent,
    HomeViewComponent,
    PageEditComponent,
    QuillComponent
  ]
})
export class EditViewModule {}
