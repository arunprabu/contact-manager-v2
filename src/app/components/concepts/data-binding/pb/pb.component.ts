import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb',
  templateUrl: './pb.component.html',
  styles: [
    `
    .redText{
      color: red;
    }

    .greenText{
      color: green;
    }
    `
  ]
})
export class PbComponent implements OnInit {

  firstName = "Arun";

  isDisabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  isLoggedIn(){
    return false;
  }
}
