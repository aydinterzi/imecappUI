import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  userForm=new FormGroup({
    username:new FormControl(""),
    email:new FormControl(""),
    password:new FormControl("")
  });
  register(){
   this.authService.register(this.userForm.value).subscribe(()=>{
     console.log("kullanıcı oluşturuldu");
   },error=>{
     console.log(error);
   }
   );
  }

}
