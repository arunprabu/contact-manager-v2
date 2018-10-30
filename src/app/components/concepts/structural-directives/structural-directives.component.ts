import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styles: []
})
export class StructuralDirectivesComponent implements OnInit {

  isLoggedIn: boolean; 

  skillsetList: Array<string>; 
  
  constructor() {
    this.isLoggedIn = false;
    this.skillsetList = ["ng", "react", "node"];
  }


  ngOnInit() {
  }

}
