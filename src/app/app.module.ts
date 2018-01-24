import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';
import { HomepageViewComponent } from './components/homepage-vew/homepage-view.component';
import { PageControlComponent } from './components/page-control/page-control.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', component: HomepageViewComponent },
  { path: 'edit', component: PostComponent },
  { path: '',
    redirectTo: '/edit',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    PostComponent,
    HomepageViewComponent,
    PageControlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [PageControlComponent]
})
export class AppModule { }
