import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course/course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   courses: Course[]=[];  
  constructor(private courseService: CoursesService,public  router:Router,public activatedroute: ActivatedRoute ){}

  ngOnInit(): void {
    this.courseService.course$.subscribe((courses: Course[]) => {
      this.courses = courses;
    })
  }
  gotoAddCourse():void{

  }
  selectedCourse?: Course;

  showCourseDetails(course:Course):void{
     this.selectedCourse=course;
    this.router.navigate(["/courseDetails",course.courseId]);
  }
}
