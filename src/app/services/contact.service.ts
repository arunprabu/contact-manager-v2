import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

//decorator 
@Injectable({
  providedIn: 'root'
})

export class ContactService {
  //ts
  constructor( private http: Http) { }
  


 // Create Contact   
  create( contactData: Object  ) : any {  // 1. receive the form data from add contact form 
    console.log(contactData);
    // 2. send the data to rest api 
    return this.http.post('https://jsonplaceholder.typicode.com/users', contactData)
              .pipe(map( (response) => {  // 3. receive the resp from rest api 
                  console.log(response);
                  // 4. send it back to component 
                  return response.json();
                })
              );

  }

  //getContacts
  getContacts(){
    //1. send the req to get all contacts
    return this.http.get('https://jsonplaceholder.typicode.com/users')
              .pipe(map( (response) => {  // 2. receive the resp from rest api 
                console.log(response);
                // 3. send it back to component 
                return response.json();
              })
            );
  } 



}
