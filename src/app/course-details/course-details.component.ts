import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
  import { Course, Lecture, Requirement, Review } from '../course/course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  id?: number;
  courses?: Course;
  lectures?: Lecture;
  requirements?: Requirement;
  reviews?: Review;
  //  @Input() course?: Course;
  constructor(public router: Router,public activatedroute: ActivatedRoute, private courseService: CoursesService) { }

  ngOnInit(): void {
  this.activatedroute.params.subscribe((params:Params)=>{
    this.id = params?.['id'];
  });
  this.courseService.course$.subscribe((courses: Course[]) => {
    if(this.id){
    this.courses = courses.filter((courses: Course)=> courses.courseId === this.id)?.[0];
    }
  });
}
}

// this.activatedroute.params.subscribe((params:Params) => {this.id=params?.["id"]});
//     this.activitiesService['activities'].subscribe((activities:Activity[]) => {
//       if(this.id)
//       this.activities = activities.filter((activities: Activity) => activities.id === this.id)?.[0];
//     });


