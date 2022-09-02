import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { ContactFirestoreComponent } from './components/contact-firestore/contact-firestore.component';
import { ShowComponent } from './components/show/show.component';
import { ShowFirestoreComponent } from './components/show-firestore/show-firestore.component';

@NgModule({
  declarations: [
    ContactComponent,
    ContactFirestoreComponent,
    ShowComponent,
    ShowFirestoreComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class ContactModule { }