import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../Models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl:string="https://localhost:44331/api/Posts"
  constructor(private http:HttpClient) { }
  getPosts():Observable<Posts[]>{
  return this.http.get<Posts[]>(this.baseUrl);
  }
  addPost(post:Posts):Observable<Posts>{
    return this.http.post<Posts>(this.baseUrl,post);
  }

}
