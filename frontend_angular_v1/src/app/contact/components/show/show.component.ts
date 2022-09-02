import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact/contact.service';
import { Contact } from '../../classes/contact/contact.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {

  contacts = new Array<Contact>();

  constructor(private cs: ContactService) { }

  ngOnInit(): void {
    this.fetchAllContacts();
  }

  fetchAllContacts(){
    this.cs.getAllContacts().subscribe(
      (response) => {this.contacts = response},
      (err) => console.log(err),
      () => console.log("completed")
    )
  }

}