import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import { PostComponent } from './components/post/post.component';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [PostComponent]
})
export class AppModule { }
