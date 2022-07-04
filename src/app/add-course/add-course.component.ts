import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
 addCourseFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private courseService: CoursesService,  public router: Router,public activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.addCourseFormGroup= this.fb.group ({
         courses: this.fb.array([]),
    });
  }
  get courses(): FormArray{
    return ( this.addCourseFormGroup.get('courses')) as FormArray;
    
  }

  getLectures (index: number): FormArray {
    return (this.courses.at(index).get('lectures')) as FormArray;
  }
  getRequirement(index: number): FormArray {
    return (this.courses.at(index).get('requirements')) as FormArray;
  }
  getReview(index: number): FormArray {
    return (this.courses.at(index).get('reviews')) as FormArray;
  }


  addCourse(): void {
 this.courses.push(new FormGroup ({
  courseId: new FormControl(null,[Validators.required]),
  imageSource: new FormControl(null,[Validators.required]),
  title:new FormControl(null,[Validators.required]),
  description: new FormControl(null,[Validators.required]),
  creator: new FormControl(null,[Validators.required]),
  rating: new FormControl(null,[Validators.required,Validators.pattern(new RegExp('[0-9]*[.]*[0-9]*$'))]),
  reviewCount:  new FormControl(null,[Validators.required,Validators.pattern(new RegExp('[0-9]*[.]*[0-9]*$'))]),
  duration:  new FormControl(null,[Validators.required,Validators.pattern(new RegExp('[0-9]*[.]*[0-9]*$'))]),
  lecturesCount:  new FormControl(null,[Validators.required,Validators.pattern(new RegExp('[0-9]*[.]*[0-9]*$'))]),
  lectures: new FormArray([]),
  requirements: new FormArray([]),
  reviews: new FormArray([]),
  level: new FormControl(null,[Validators.required]),
 }));
  }

  addLecture(index: number): void {
    this.getLectures(index).push(new FormGroup ({
     lectureDesc: new FormControl(null,[Validators.required]),
     lectureDuration: new FormControl(null,[Validators.required,Validators.pattern(new RegExp('[0-9]*[.]*[0-9]*$'))]),
  }));
}

addRequiremnet(index: number): void {
  this.getRequirement(index).push(new FormGroup ({
    addrequrirements: new FormControl(null,[Validators.required]),
}));
}
addReview(index: number): void {
  this.getReview(index).push(new FormGroup ({
       profileImage:  new FormControl(null,[Validators.required]),
       reviwerName: new FormControl(null,[Validators.required]),
       reviewRating: new FormControl(null,[Validators.required,Validators.pattern(new RegExp('[0-9]*[.]*[0-9]*$'))]),
       addreviews: new FormControl(null,[Validators.required]),
      }));
}

saveCourses(): void {
  if(this.addCourseFormGroup?.value){
      this.courseService.addCourse(this.addCourseFormGroup.value.courses);
  }
  // this.router.navigate(["search"]);
  // console.log("form group",this.addCourseFormGroup.value);
}
}
