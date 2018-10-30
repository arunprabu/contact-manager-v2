import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {
  //send the dateOfLastVisit to parent comp
  dateOfLastVisit: any; //this data should be passed to the parent 
  
  //// step 1: creating custom event in the name of findLastVisit
  @Output() findLastVisit = new EventEmitter<string>();

  constructor() {
    this.dateOfLastVisit = new Date();
  }

  ngOnInit() {
  }

  sendDataToParent(){
    console.log(this.dateOfLastVisit);
    
    // step 2: emit that event 
    // step 3: send the data within that emitted event 
    this.findLastVisit.emit( this.dateOfLastVisit ) ;
  }
}
