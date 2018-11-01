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
  
  


  create( contactData  ){  // 1. receive the form data from add contact form 
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



}
