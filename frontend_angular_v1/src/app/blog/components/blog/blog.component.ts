import { Component, OnInit } from '@angular/core';
import { Blog } from '../../classes/blog/blog.model';
import { BlogService } from '../../services/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  blogs:any[] = new Array<Blog[]>();
  blog:any = new Blog();
  msg:string='';

  constructor(private bs: BlogService) { }

  ngOnInit(): void {
    this.getAllBlogs();
  }

  createBlog(){
    this.bs.createBlog(this.blog);
    this.msg = "Blog created successfully";
  }

  getAllBlogs(){
    this.bs.getAllBlogs().subscribe(
      (response) => {this.blogs = response},
      (err) => console.log(err),
      // () => console.log("completed")
      () => console.log(this.blogs)
    );
  }

  getBlogById(id:number){
    this.bs.getBlogById(id)
    .subscribe(response => this.blog = response);
  }

  updateBlog(){
    this.bs.updateBlog(this.blog.id??NaN, this.blog);
    this.msg="Blog Updated Successfully";
  }

  deleteBlog(id:number){
    this.bs.deleteBlog(id);
    this.msg="Blog Deleted Successfully";
  }

  clear(){
    this.blog = new Blog();
    this.msg = '';
    this.getAllBlogs();
  }

}