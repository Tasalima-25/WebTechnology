import { Component } from '@angular/core';
import { StudentService } from '../Services/student-service';

@Component({
  selector: 'app-studentlist',
  imports: [],
  templateUrl: './studentlist.html',
  styleUrl: './studentlist.css',
})
export class Studentlist {
  students:any[]=[];

  /*
  ctor-short cut
  */
 
constructor(private studentService:StudentService) {
  
 }

 /*
 Lifecycle hook
 ngonInit--
  This method runs automatically when component loads
 */

ngOnInit(){
  this.students=this.studentService.getStudents();
  console.log(this.students);
}

}
