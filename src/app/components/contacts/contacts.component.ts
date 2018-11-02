import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {

  contactList: any[];

  constructor( private contactService: ContactService) {
    console.log("Inside Constructor");
  }

  ngOnInit() {
    console.log("Inside ngOnInit");
    this.contactService.getContacts()
                        .subscribe( (resp) => {
                          console.log( resp);
                          this.contactList = resp;
                        });
  }


}
