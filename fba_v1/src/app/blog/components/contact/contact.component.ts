import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact/contact.service';

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
      'Name': ['', [Validators.required]],
      'Email': ['', [Validators.required, Validators.email]],
      'Password': ['',[Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      'Phone': ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      'Address_Line_1': ['',[Validators.required, Validators.maxLength(50)]],
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
    this.cs.createContact(this.contactForm.value).subscribe(
      (response) => console.log(response),
      (err) => console.log(err),
      () => console.log("completed")
    )
    this.msg="Contact Details Submitted Successfully";
  }

}