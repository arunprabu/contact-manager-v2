import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  contactData: Object = {
    username: 'a',
    phone: '12345',
    email: 'a@b.com'
  };
  
  status: string;

  constructor( private contactService: ContactService, private router: Router ) {   // dependency injection
  }

  ngOnInit() {
  }

  submitHandler(formData: NgForm){   // 1. get the data from html form 
    // 
    console.log(formData);
    console.log("Data Submitted in Component TS ");
    // validations or else any form validator directives/modules

    // 2. send the same data to services     
    this.contactService.create(formData.value)
                      .subscribe( (resp) => {   //3. receive resp from service
                        console.log(resp);
                        //do if/else and find errors 
                        this.status = "Thanks! The contact has been added. Redirecting you in a while...";
                        //redirect after 3 seconds
                        setTimeout( () => {
                          // redirect 
                          //this.router.navigateByUrl(`contacts`);
                          this.router.navigate(['contacts']);
                        }, 3000);
                      });
  }

}
