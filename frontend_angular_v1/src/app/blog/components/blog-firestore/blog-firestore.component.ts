import { Component, OnInit } from '@angular/core';
import { Blog } from '../../classes/blog/blog.model';
import { BlogFirestoreService } from '../../services/blog-firestore/blog-firestore.service';

@Component({
  selector: 'app-blog-firestore',
  templateUrl: './blog-firestore.component.html',
  styleUrls: ['./blog-firestore.component.css']
})

export class BlogFirestoreComponent implements OnInit {

  blogs:any[] = new Array<Blog[]>();
  blog:any = new Blog();
  msg:string='';
  firedocid:string='';

  constructor(private bfs: BlogFirestoreService) { }

  ngOnInit(): void {
    this.getAllBlogs();
  }

  createBlog(){
    this.bfs.createBlog(JSON.parse(JSON.stringify(this.blog)));
    this.msg = "Blog created successfully";
  }

  getAllBlogs(){
    this.bfs.getAllBlogs().subscribe(
      (response) => {this.blogs = response},
      (err) => console.log(err),
      () => console.log("completed")
    );
  }

  getBlogById(id:string){
    this.firedocid = id;
    this.bfs.getBlogById(id).subscribe(
      (response => {this.blog = response.payload.data()}),
      (err) => console.log(err),
      () => console.log("completed")
    );
  }

  updateBlog(){
    this.bfs.updateBlog(this.firedocid, JSON.parse(JSON.stringify(this.blog)));
    this.msg="Blog Updated Successfully";
  }

  deleteBlog(id:string){
    this.bfs.deleteBlog(id);
    this.msg="Blog Deleted Successfully";
  }

  clear(){
    this.blog = new Blog();
    this.msg = '';
    this.getAllBlogs();
  }

}