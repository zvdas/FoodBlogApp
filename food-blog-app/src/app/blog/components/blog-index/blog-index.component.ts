import { Component, OnInit } from '@angular/core';
import { Blog } from '../../classes/blog';
import { CrudJsonService } from '../../services/crud-json.service';

@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.css']
})

export class BlogIndexComponent implements OnInit {

  blogs:any[] = new Array<Blog[]>();
  blog = new Blog();
  msg:string='';

  constructor(private cjs: CrudJsonService) { }

  ngOnInit(): void {
    this.cjs.getAllBlogs()
      .subscribe(response => this.blogs = response);
  }

  createBlog(){
    this.cjs.createBlog(this.blog)
      .subscribe(response => this.msg="Course Added Successfully");
  }

  clear(){
    this.blog = new Blog();
    this.msg = '';
    this.cjs.getAllBlogs()
    .subscribe(response => this.blogs = response);
  }

  getBlogById(){

  }

  updateBlog(){

  }

  deleteBlog(){

  }

}