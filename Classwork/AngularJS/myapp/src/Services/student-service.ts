import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students=[
    { name:"Taslima",age:21,course:"AIML"},
    { name:"Riya",age:20,course:"AIDS"},
    { name:"Srushti",age:21,course:"AIML"},

  ];
  getStudents()
  {
    return this.students;
  }
}
