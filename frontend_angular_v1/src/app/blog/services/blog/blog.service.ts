import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../../classes/blog/blog.model';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  // url:string ='http://localhost:3000/blog';
  // url:string ='http://localhost:5000/api/v1/blogs';
  url:string ='https://foodblogappnodejs.herokuapp.com/api/v1/blogs';

  constructor(private http:HttpClient) { }

  createBlog(blog:Blog){
    this.http.post(this.url, blog).subscribe(
      (response)=>  console.log(response),
      (error)=>     console.log(error),
      ()=>          console.log("completed")
    );
  }

  getAllBlogs(){
    return this.http.get<Blog[]>(this.url);
  }

  getBlogById(id:number){
    return this.http.get<Blog>(`${this.url}/${id}`);
  }

  updateBlog(id:number, blog:Blog){
    this.http.put(`${this.url}/${id}`, blog).subscribe(
      (response)=>  console.log(response),
      (error)=>     console.log(error),
      ()=>          console.log("completed")
    );
  }

  deleteBlog(id:number){
    this.http.delete(`${this.url}/${id}`).subscribe(
      (response)=>  console.log(response),
      (error)=>     console.log(error),
      ()=>          console.log("completed")
    );
  }
  
}