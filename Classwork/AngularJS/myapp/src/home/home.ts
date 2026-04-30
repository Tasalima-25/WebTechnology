import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //interpolation
  fname : String="Taslima";
  myRoll:Number=304;
  course:String="WEB";
  imageURL:String="https://google.com";

  showButton()
  {
    this.fname="TASLIMA";
    alert("Message Displayed !");
  }

}