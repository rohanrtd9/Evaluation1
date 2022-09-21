import { Component, OnInit } from '@angular/core';
import { rohan } from '../model/rohan';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  user:any
  constructor() { }

  ngOnInit(): void {
    this.user=new rohan().user
  }

}
