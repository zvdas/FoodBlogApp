import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { BlogComponent } from './blog/components/blog/blog.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { ShowComponent } from './contact/components/show/show.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { BlogFirestoreComponent } from './blog/components/blog-firestore/blog-firestore.component';
import { ContactFirestoreComponent } from './contact/components/contact-firestore/contact-firestore.component';
import { ShowFirestoreComponent } from './contact/components/show-firestore/show-firestore.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  /*
  {path:'blog', component:BlogComponent},
  {path:'contact', component:ContactComponent},
  {path:'show', component:ShowComponent},
  */
  // /*
  {path:'blog', component:BlogFirestoreComponent},
  {path:'contact', component:ContactFirestoreComponent},
  {path:'show', component:ShowFirestoreComponent},
  // */
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }