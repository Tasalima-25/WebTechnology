import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = [
    { name: 'Shravani Dake', age: 21, course: 'CSE-AIML' },
    { name: 'Arya Patil', age: 23, course: 'IT' },
    { name: 'Tasalima Jamadar', age: 21, course: 'Textile' },
    { name: 'Shravani Patil', age: 20, course: 'AIDS' },
    { name: 'Trupti Zore', age: 21, course: 'CSE' },
    { name: 'Neha Patil', age: 22, course: 'Civil' },
  ];

  getStudents() {
    return this.students;
  }
}
