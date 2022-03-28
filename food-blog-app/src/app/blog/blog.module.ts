import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogIndexComponent } from './components/blog-index/blog-index.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BlogIndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    BlogIndexComponent
  ]
})

export class BlogModule { }