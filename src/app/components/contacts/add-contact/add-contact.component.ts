import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from "@angular/router";

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
    // validations

    // 2. send the same data to services     
    this.contactService.create(formData.value)
                      .subscribe( (resp) => {   //3. receive resp from service
                        console.log(resp);
                        //do if/else and find errors 
                        this.status = "Thanks! The contact has been added";
                        //redirect after 3 seconds
                        setTimeout( () => {
                          // redirect 
                          this.router.navigate(['contacts']);
                        }, 3000);
                      });
  }

}
