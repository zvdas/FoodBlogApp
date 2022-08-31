import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './blog/components/home/home.component';
import { BlogComponent } from './blog/components/blog/blog.component';
import { ContactComponent } from './blog/components/contact/contact.component';
import { ShowComponent } from './blog/components/show/show.component';
import { ErrorComponent } from './blog/components/error/error.component';
import { BlogFirestoreComponent } from './blog/components/blog-firestore/blog-firestore.component';
import { ContactFirestoreComponent } from './blog/components/contact-firestore/contact-firestore.component';
import { ShowFirestoreComponent } from './blog/components/show-firestore/show-firestore.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'blog', component:BlogComponent},
  {path:'contact', component:ContactComponent},
  {path:'show', component:ShowComponent},
  /*
  {path:'blog', component:BlogFirestoreComponent},
  {path:'contact', component:ContactFirestoreComponent},
  {path:'show', component:ShowFirestoreComponent},
  */
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }