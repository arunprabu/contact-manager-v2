import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styles: []
})
export class SiComponent implements OnInit {

  // STRING INTERPOLATION
  appName: string = 'Contact Manager App'; // string 
  developedIn: number = 2018; // number 
  isLoggedIn: boolean = false; // boolean 

  //object
  myProfile: Object = {
    name: "Arun",
    city: "Chennai"
  }
  
  //array 
  skillset: string[] = [ 'ng', 'react', 'nodejs', 'mean', 'mern'];

  constructor() { }

  ngOnInit() {
  }

  //method
  getExperience() : string {
    return "13 years";
  }
}
