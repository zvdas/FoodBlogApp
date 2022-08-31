import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowComponent } from './components/show/show.component';
import { BlogFirestoreComponent } from './components/blog-firestore/blog-firestore.component';
import { ContactFirestoreComponent } from './components/contact-firestore/contact-firestore.component';
import { ShowFirestoreComponent } from './components/show-firestore/show-firestore.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    ErrorComponent,
    ShowComponent,
    BlogFirestoreComponent,
    ContactFirestoreComponent,
    ShowFirestoreComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],exports: [
    NavbarComponent
  ]
})

export class BlogModule { }