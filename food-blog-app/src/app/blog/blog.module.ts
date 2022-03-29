import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogIndexComponent } from './components/blog-index/blog-index.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    BlogIndexComponent,
    RegisterComponent,
    LoginComponent,
    ErrorComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    BlogIndexComponent,
    RegisterComponent,
    LoginComponent,
    ErrorComponent,
    ContactComponent
  ]
})

export class BlogModule { }