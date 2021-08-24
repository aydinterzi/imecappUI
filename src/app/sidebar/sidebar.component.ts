import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  categories:string[]=["Web Developer","Game Developer","Data Science"];
  languages:string[]=["Turkish","English","Chinese","Hindi"];
  progLanguages:string[]=["C#","Python","Java"];
}
