import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './components/blog/blog.component';
import { BlogFirestoreComponent } from './components/blog-firestore/blog-firestore.component';

@NgModule({
  declarations: [
    BlogComponent,
    BlogFirestoreComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class BlogModule { }