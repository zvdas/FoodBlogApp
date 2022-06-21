import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactFirestoreService } from '../../services/contact-firestore/contact-firestore.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  msg:string="";
  contactForm:any;
  
  constructor(private fb:FormBuilder, private cfs: ContactFirestoreService) {
    this.contactForm = fb.group({
      'Name': ['', [Validators.required]],
      'Email': ['', [Validators.required, Validators.email]],
      'Password': ['',[Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      'Phone': ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      'Address_Line_1': ['',[Validators.required]],
      'Address_Line_2': ['',[]],
      'City': ['',[Validators.required]],
      'State': ['',[Validators.required]],
      'Country': ['',[Validators.required]],
      'Zip': ['',[Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.cfs.createContact(this.contactForm.value);
    this.msg="Contact Details Submitted Successfully";
  }

}