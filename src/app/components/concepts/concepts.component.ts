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

  birthday = new Date(1988, 3, 15); // April 15, 1988; - used in pipes tab
  lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo, vero alias, voluptatum asperiores commodi hic minima odio voluptates cumque incidunt molestiae perferendis voluptate consequatur officiis dolores quod, voluptas quas.';



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
