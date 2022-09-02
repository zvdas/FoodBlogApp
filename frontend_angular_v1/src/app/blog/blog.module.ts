import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogFirestoreComponent } from './components/blog-firestore/blog-firestore.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    BlogComponent,
    ErrorComponent,
    BlogFirestoreComponent
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