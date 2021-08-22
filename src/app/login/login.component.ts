import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userForm=new FormGroup({
    username:new FormControl(""),
    password:new FormControl("")
  });
  onSubmit()
  {
    console.log(this.userForm.value);
  }

}
