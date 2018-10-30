import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CebComponent } from './data-binding/ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements AfterViewInit {

  @ViewChild(CebComponent) cebData;
  
  personName = "Vijay";

  visitedDate: any;

  constructor() { }

  ngAfterViewInit() {
    
  }

  //method is in parent comp
  printLastVisit( evt ){

    console.log(this.cebData);
    
    console.log(evt); // data received from child thru $event 
    this.visitedDate = evt;
  }

}
