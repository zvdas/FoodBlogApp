import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../../classes/blog/blog.model';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  url:string ='http://localhost:3000/blog';

  constructor(private http:HttpClient) { }

  createBlog(blog:Blog){
    return this.http.post(this.url, blog);
  }

  getAllBlogs(){
    return this.http.get<Blog[]>(this.url);
  }

  getBlogById(id:number){
    return this.http.get<Blog>(this.url+`/${id}`);
  }

  updateBlog(id:number, blog:Blog){
    return this.http.put(this.url+`/${id}`, blog);
  }

  deleteBlog(id:number){
    return this.http.delete(this.url+`/${id}`);
  }
  
}
