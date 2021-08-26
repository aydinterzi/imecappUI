import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-ilanver',
  templateUrl: './ilanver.component.html',
  styleUrls: ['./ilanver.component.css']
})
export class IlanverComponent implements OnInit {

  constructor(private postService:PostService) { }

  ngOnInit(): void {
  }
  postForm=new FormGroup({
    title:new FormControl(""),
    description:new FormControl(""),
    category:new FormControl(""),
    progLanguage:new FormControl(""),
    language:new FormControl("")
  })
  categories:string[]=["Web Developer","Game Developer","Data Science"];
  languages:string[]=["Turkish","English","Chinese","Hindi"];
  progLanguages:string[]=["C#","Python","Java"];
  onSubmit(){
    this.postService.addPost(this.postForm.value)
    .subscribe(p=>{
      console.log(p);
    });
  }
}
