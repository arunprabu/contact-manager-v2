import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from 'src/app/services/contact.service';

declare var $: any;   //use jquery with in this component

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {
  contactData: Object = {};
  editableContactData: Object = {};
  contactId: number;
  isSaved: boolean;

  constructor( private contactService: ContactService,  private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit() {
    //0. get the id of the user 
    this.activatedRoute.params.subscribe( (params) => {
      console.log(params);
      this.contactId = params.id;
    });
    
    //1. send req to service with an id of the user
    this.contactService.getContactById(this.contactId)
        .subscribe( (resp) =>{  //2. get the data from service 
          console.log(resp);
          this.contactData = resp;
        });
  }

  launchEditModal(){
    //to duplicate original object 
    this.editableContactData = JSON.parse(JSON.stringify(this.contactData)); //duplicate obj 
    $('#editModal').modal('show');  // open modal thru js 
  }

  //edit contact 
  editContactHandler(){
    console.log(this.editableContactData); // ready for submission
    this.contactService.updateContact(this.editableContactData)
                      .subscribe( (resp) =>{  //2. get the data from service 
                        console.log(resp);
                        //if else stmt for capturing success and failure
                        this.isSaved = true;
                        setTimeout(()=>{
                          $('#editModal').modal('hide');  // hide modal thru js 
                          this.contactData = resp;
                        }, 3000);
                        
                      });

  }
  
}
