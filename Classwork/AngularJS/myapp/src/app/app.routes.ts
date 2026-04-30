import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { Studentlist } from '../studentlist/studentlist';
import { Addstudent } from '../addstudent/addstudent';

export const routes: Routes = [
    {path:'home',component:Home},
    {path:'studentList',component:Studentlist},
    {path:'Addstudent',component:Addstudent}
];
