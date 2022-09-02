import { Component, OnInit } from '@angular/core';
import { Contact } from '../../classes/contact/contact.model';
import { ContactFirestoreService } from '../../services/contact-firestore/contact-firestore.service';

@Component({
  selector: 'app-show-firestore',
  templateUrl: './show-firestore.component.html',
  styleUrls: ['./show-firestore.component.css']
})

export class ShowFirestoreComponent implements OnInit {

  contacts = new Array<Contact>();

  constructor(private cfs: ContactFirestoreService) { }

  ngOnInit(): void {
    this.fetchAllContacts();
  }

  fetchAllContacts(){
    this.cfs.getAllContacts().subscribe(
      (response) => {this.contacts = response.map(res=>res.payload.doc.data()) as Contact[]},
      (err) => console.log(err),
      () => console.log("completed")
    )
  }
  
}