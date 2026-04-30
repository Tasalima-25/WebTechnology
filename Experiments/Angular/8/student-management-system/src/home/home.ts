import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  student = {
    name: "Shravani Dake",
    age: 21,
    course: "AIML"
  }

  newStudent = {
    name: '',
    age:'',
    course:''
  }

  updateStudent(){
    this.student.name = this.newStudent.name;
    this.student.age = Number(this.newStudent.age);
    this.student.course = this.newStudent.course;
  }
src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzNBiR096VTzXmS-VodiMTDgjYxoxVwwsm1g&s'
    //array of courses
  courses : string[] = ["CSE", "AIML", "AIDS", "ENTC"];
}
