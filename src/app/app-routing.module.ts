import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', loadChildren: () => import('./views/courses-page/courses-page.module').then(m => m.CoursesPageModule) },
  { path: 'companys', loadChildren: () => import('./views/company-list-page/company-list-page.module').then(m => m.CompanyListPageModule) },
  { path: 'contacts', loadChildren: () => import('./views/contacts-page/contacts-page.module').then(m => m.ContactsPageModule), }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
