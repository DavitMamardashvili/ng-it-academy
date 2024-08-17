import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CoursesPageRoutingModule } from './courses-page-routing.module';
import { CardAreaComponent } from './courses/components/card-area/card-area.component';
import { FilterAreaComponent } from './courses/components/filter-area/filter-area.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CardAreaComponent,
    FilterAreaComponent
  ],
  imports: [
    CommonModule,
    CoursesPageRoutingModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesPageModule { }
