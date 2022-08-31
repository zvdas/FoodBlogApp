import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Contact } from '../../classes/contact/contact.model';

@Injectable({
  providedIn: 'root'
})

export class ContactFirestoreService {

  constructor(private store: AngularFirestore) { }

  createContact(contact:Contact){
    this.store.collection('contact').add(contact)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
      .finally(() => console.log("completed"))
  }

  getAllContacts(){
    return this.store.collection('contact').snapshotChanges();
  }
}