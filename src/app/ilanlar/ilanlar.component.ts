import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageCreateComponent } from '../messages/message-create/message-create.component';
import { Posts } from '../Models/posts';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-ilanlar',
  templateUrl: './ilanlar.component.html',
  styleUrls: ['./ilanlar.component.css']
})
export class IlanlarComponent implements OnInit {
  posts:Posts[];
  constructor(private postService:PostService,private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts()
  {
     this.postService.getPosts().subscribe(p=>
      {
        this.posts=p;
        console.log(this.posts);
      }
      );
  }
  sendMessage(userId){
      const modalRef=this.modalService.open(MessageCreateComponent);
      modalRef.componentInstance.recipientId=userId;
  }
}
