import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from './course/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: BehaviorSubject<Course[]>;
  course$: Observable<Course[]>;
  constructor() { 
    this.courses =  new BehaviorSubject<Course[]>({}as Course[]);
    this.course$ = this.courses.asObservable();
  }
  public addCourse(courses: Course[]): void {
            this.courses.next(courses);
  }

  getCourses(): Course[]{

    return (this.courses.value);

   

  }
}
