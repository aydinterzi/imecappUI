import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})
export class MessageCreateComponent implements OnInit {
  @Input() recipientId:number;
  constructor(private activeModal:NgbActiveModal,
    private postService:PostService,
    private authService:AuthService,
    private router:Router) { }
  message:any={}
  ngOnInit(): void {
    console.log(this.recipientId);
  }
  sendMessage(){
      this.message.recipientId=this.recipientId;
      this.postService.sendMessage(this.authService.decodedToken.nameid,this.message)
    .subscribe(result=>{
      console.log(result);
      this.activeModal.close();
      this.router.navigate(["/ilanlar"]);
    },err=>{
      console.log(err);
    });
  }
  closeModal(){
    this.activeModal.close();

  }
}
