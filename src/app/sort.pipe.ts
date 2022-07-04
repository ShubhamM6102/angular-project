import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course/course';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Course[], field: string): Course[] {
    return array.sort(function(a,b){
      if(field===  'title'){
     if(b.title > a.title){
      return -1;
     }  else if(b.title < a.title) {
      return 1;
     } else {
      return 0;
     }
    }
     else {
      if(b.title > a.title){
        return -1;
       }  else if(b.title < a.title) {
        return 1;
       } else {
        return 0;
       }
     }
  

    });
  }

}
