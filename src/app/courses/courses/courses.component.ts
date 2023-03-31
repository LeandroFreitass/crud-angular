import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  // courses: Course[] = [];

  displayedColumns =['name','horasTrabalhadas']

  // coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {

    // this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list();

    //this.coursesService.list().subscribe(courses => this.courses = courses)
  }

  ngOnInit(): void {

  }

}
