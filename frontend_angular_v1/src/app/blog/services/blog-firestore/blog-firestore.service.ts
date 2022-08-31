import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Blog } from '../../classes/blog/blog.model';

@Injectable({
  providedIn: 'root'
})

export class BlogFirestoreService {

  constructor(private store: AngularFirestore) {  }

  createBlog(blog:Blog){
    this.store.collection('blog').add(blog)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      .finally(() => console.log("completed"))
  }

  getAllBlogs(){
    return this.store.collection('blog').snapshotChanges();
  }

  getBlogById(id:string){
    return this.store.collection('blog').doc(id).snapshotChanges();
  }

  updateBlog(id:string, blog:any){
    this.store.collection('blog').doc(id).update(blog)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log("completed"))
  }

  deleteBlog(id:string){
    return this.store.collection('blog').doc(id).delete();
  }

}