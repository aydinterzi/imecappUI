import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import { Posts } from '../Models/posts';
import { User } from '../Models/user';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string="https://localhost:44331/api/user/"
  helper = new JwtHelperService();
  decodedToken:any;
  constructor(private http:HttpClient) { }
  login(user:any)
  {
    return this.http.post(this.baseUrl+"login",user).pipe(
      map((response:any)=>{
        const result=response;
        if(result){
          localStorage.setItem("token",result.token);
        }
      })
    );
  }

  register(user:any){
    return this.http.post(this.baseUrl+"register",user);
  }

  loggedIn(){
    const token=localStorage.getItem("token");
    return !this.helper.isTokenExpired(token);
  }
}
