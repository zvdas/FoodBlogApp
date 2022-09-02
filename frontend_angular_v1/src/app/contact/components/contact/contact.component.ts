import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/blog/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  msg:string="";
  contactForm:any;

  constructor(private fb:FormBuilder, private cs: ContactService) {
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
    this.cs.createContact(this.contactForm.value);
    this.msg="Contact Details Submitted Successfully";
  }

}
