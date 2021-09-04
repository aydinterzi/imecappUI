import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import { Posts } from '../Models/posts';
import { User } from '../Models/user';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string="https://localhost:44331/api/user/"
  helper = new JwtHelperService();
  decodedToken:any;
  constructor(private http:HttpClient,private router:Router) { }
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
  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }

  register(user:any){
    return this.http.post(this.baseUrl+"register",user);
  }

  loggedIn(){
    const token=localStorage.getItem("token");
    if(this.helper.isTokenExpired(token))
        localStorage.removeItem("token");
    return !this.helper.isTokenExpired(token);
  }
}
