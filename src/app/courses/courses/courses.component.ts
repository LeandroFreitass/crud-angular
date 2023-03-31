import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

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

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
    ) {

    // this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list().pipe(
      catchError(error => {
        this.onError('Deu ruim ai meu nobre.')
        return of([])
      })
    );

    //this.coursesService.list().subscribe(courses => this.courses = courses)
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}
