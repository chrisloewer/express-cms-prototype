import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomepageViewComponent } from './components/homepage-vew/homepage-view.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PageControlComponent } from './components/page-control/page-control.component';
import { PageEditComponent } from './components/page-edit/page-edit.component';
import { QuillModule } from 'ngx-quill';
import { RouterModule, Routes } from '@angular/router';
import { QuillComponent } from './components/quill/quill.component';
import { MatSnackBarModule } from '@angular/material';

const appRoutes: Routes = [
  { path: 'home', component: HomepageViewComponent },
  { path: 'edit', component: PageEditComponent },
  { path: '',
    redirectTo: '/edit',
    pathMatch: 'full'
  }
];

@NgModule({
  exports: [
    MatSnackBarModule
  ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    PageEditComponent,
    HomepageViewComponent,
    PageControlComponent,
    QuillComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    QuillModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [PageControlComponent]
})
export class AppModule { }
