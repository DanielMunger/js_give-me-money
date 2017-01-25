import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(input: Project[], category) {
    var output: Project[] =[];
    if(input !== null) {
      if(category === "all") {
        return input;
      } else  {
        for(var i = 0; i<input.length - 1; i++) {
          if (input[i].category === category) {
            output.push(input[i])
          }
        }
        return output
      }
    } else {
      return input;  
    }
  }
}
