import { Component, OnInit} from '@angular/core';
import { Course } from './course/course';
import { CoursesService } from './courses.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent implements OnInit {
  title //  this.adBoxesService.getAdBoxes();
    (title: any) {
      throw new Error('Method not implemented.');
  }
    courses: Course[]= [];  
  ngOnInit(): void {
   
  }
  selectedCourse?: Course;

  showCourseDetails(course:Course):void{
    this.selectedCourse=course;
  }

  }
  


