import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactFirestoreService } from '../../services/contact-firestore/contact-firestore.service';

@Component({
  selector: 'app-contact-firestore',
  templateUrl: './contact-firestore.component.html',
  styleUrls: ['./contact-firestore.component.css']
})

export class ContactFirestoreComponent implements OnInit {

  msg:string="";
  contactForm:any;

  constructor(private fb:FormBuilder, private cfs: ContactFirestoreService) { 
    this.contactForm = fb.group({
      'name': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['',[Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      'phone': ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      'address_line_1': ['',[Validators.required]],
      'address_line_2': ['',[]],
      'city': ['',[Validators.required]],
      'state': ['',[Validators.required]],
      'country': ['',[Validators.required]],
      'zip': ['',[Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.cfs.createContact(this.contactForm.value);
    this.msg="Contact Details Submitted Successfully";
  }

}
