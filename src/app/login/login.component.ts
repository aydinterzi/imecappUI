import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Posts } from '../Models/posts';
import { User } from '../Models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private http:HttpClient,private authService:AuthService) { }

  ngOnInit(): void {
  }
  userForm=new FormGroup({
    username:new FormControl(""),
    password:new FormControl("")
  });
  login(){
    this.authService.login(this.userForm.value).subscribe(next=>{
      console.log("login başarılı");
    },error=>{
      console.log("login hatalı");
    })
  }

}
