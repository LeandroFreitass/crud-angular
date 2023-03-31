import { NgModule } from '@angular/core';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule
  ]
})
export class CoursesModule { }
