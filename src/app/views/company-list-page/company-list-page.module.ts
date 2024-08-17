import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyListPageRoutingModule } from './company-list-page-routing.module';

@NgModule({
  declarations: [
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    CompanyListPageRoutingModule,
  ],
  exports: [
    CompanyListComponent
  ]
})
export class CompanyListPageModule { }