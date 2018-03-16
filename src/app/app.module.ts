import { EditViewModule } from './modules/edit-view.module';
import { GenericPageViewComponent } from './components/generic-page-vew/generic-page-view.component';
import { NgModule } from '@angular/core';
import { PageControlComponent } from './components/page-control/page-control.component';
import { PageEditComponent } from './components/page-edit/page-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSnackBarModule } from '@angular/material';
import { HomeViewComponent } from './components/home-view/home-view.component';

const appRoutes: Routes = [
  { path: 'page/:id', component: GenericPageViewComponent },
  { path: 'home', component: HomeViewComponent },
  { path: 'edit', component: PageEditComponent },
  { path: 'edit/:id', component: PageEditComponent },
  { path: '',
    redirectTo: '/edit/00004',
    pathMatch: 'full'
  }
];

@NgModule({
  exports: [
    MatSnackBarModule
  ],
  declarations: []
})
export class MaterialModule {}

@NgModule({
  imports: [
    EditViewModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    PageControlComponent
  ],
  providers: [],
  bootstrap: [PageControlComponent]
})
export class AppModule { }
