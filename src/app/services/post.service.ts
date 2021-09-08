import { HttpClient, HttpParams } from '@angular/common/http';
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
  getPosts(postParams?):Observable<Posts[]>{
    let params=new HttpParams();
    if(postParams!=null){
      if(postParams.category!=null)
        params.append("category",postParams.category);
      if(postParams.category!=null)
        params.append("language",postParams.language);
      if(postParams.category!=null)
        params.append("progLanguage",postParams.progLanguage);
    }
  return this.http.get<Posts[]>(this.baseUrl,{params:params});
  }
  addPost(post:Posts):Observable<Posts>{
    post.userId=this.authservice.decodedToken.nameid;
    return this.http.post<Posts>(this.baseUrl,post);
  }

}
