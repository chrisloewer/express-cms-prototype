import { EditViewModule } from './modules/edit-view.module';
import { GenericPageViewComponent } from './components/generic-page-vew/generic-page-view.component';
import { NgModule } from '@angular/core';
import { PageControlComponent } from './components/page-control/page-control.component';
import { PageEditComponent } from './components/page-edit/page-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { LoginComponent } from './components/login/login.component';
import { LoginModule } from './modules/login.module';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeViewComponent },
  { path: 'edit', component: PageEditComponent },
  { path: 'page/:id', component: GenericPageViewComponent },
  { path: 'edit/:id', component: PageEditComponent },
  { path: '',
    redirectTo: '/edit/00004',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    EditViewModule,
    LoginModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    PageControlComponent
  ],
  providers: [],
  bootstrap: [PageControlComponent]
})
export class AppModule { }
