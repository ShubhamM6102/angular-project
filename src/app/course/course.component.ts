// import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from './course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

@Input() course!: Course;
@Output() coursedetail = new EventEmitter<Course>();
  constructor(public router: Router,public activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  public showCourseDetails(): void {
    this.coursedetail.emit(this.course);
   
  }

}
