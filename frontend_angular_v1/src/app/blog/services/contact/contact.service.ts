import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../../classes/contact/contact.model';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  // url:string ='http://localhost:3000/contact';
  url:string ='https://foodblogappnodejs.herokuapp.com/api/v1/contacts';

  constructor(private http:HttpClient) { }

  createContact(contact:Contact){
    return this.http.post(this.url, contact);
  }

  getAllContacts(){
    return this.http.get<Contact[]>(this.url);
  }
}