import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private http:HttpClient,private authService:AuthService,private router:Router) { }
  helper = new JwtHelperService();
  ngOnInit(): void {
  }
  userForm=new FormGroup({
    username:new FormControl(""),
    password:new FormControl("")
  });
  login(){
    this.authService.login(this.userForm.value).subscribe(next=>{
      const token=localStorage.getItem("token");
    if(token){
      this.authService.decodedToken=this.helper.decodeToken(token);
    }
      this.router.navigate(["ilanlar"]);
    },error=>{
      console.log("login hatalı");
    })
  }

}
