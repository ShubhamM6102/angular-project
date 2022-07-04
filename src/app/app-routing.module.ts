import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CourseComponent } from './course/course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
 {
  path:'',
  component:AddCourseComponent,
 },
 {
  path:"search",
  component: HeaderComponent,
 },
 {
  path:"courseDetails/:id",
  component: CourseDetailsComponent,
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
