import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavbarComponent
  ]
})

export class SharedModule { }