import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogIndexComponent } from './blog/components/blog-index/blog-index.component';
import { ContactComponent } from './blog/components/contact/contact.component';
import { ErrorComponent } from './blog/components/error/error.component';
import { LoginComponent } from './blog/components/login/login.component';
import { RegisterComponent } from './blog/components/register/register.component';

const routes: Routes = [
  {path:'blog', component:BlogIndexComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'contact', component:ContactComponent},
  {path:'', redirectTo:'/register', pathMatch:'full'},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }