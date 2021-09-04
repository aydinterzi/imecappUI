import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../Models/posts';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl:string="https://localhost:44331/api/Posts"
  constructor(private http:HttpClient,private authservice:AuthService) { }
  getPosts():Observable<Posts[]>{
  return this.http.get<Posts[]>(this.baseUrl);
  }
  addPost(post:Posts):Observable<Posts>{
    post.userId=this.authservice.decodedToken.nameid;
    return this.http.post<Posts>(this.baseUrl,post);
  }

}
