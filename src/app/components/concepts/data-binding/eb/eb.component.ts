import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb',
  templateUrl: './eb.component.html',
  styles: []
})
export class EbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginHandler( evt ){
    console.log(evt);
    alert("Login Clicked");
  }
}
