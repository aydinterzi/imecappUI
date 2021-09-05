import { Component, OnInit } from '@angular/core';
import { Posts } from '../Models/posts';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-ilanlar',
  templateUrl: './ilanlar.component.html',
  styleUrls: ['./ilanlar.component.css']
})
export class IlanlarComponent implements OnInit {
  posts:Posts[];
  constructor(private postService:PostService) { }

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
}
