import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switch: boolean = true;
  color = 'red';
  loggedIn = true;
  numbers = [1,2,3,4,5];
  title = 'Dojo Mail';
  name = "Banana";
  user = {
  	firstName: "Darth",
  	lastName: "Vader"
  }
  number = 10;
  amount = 1.20;
  today = new Date();
}
