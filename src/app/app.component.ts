import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolioWebsit';
  constructor(public router: Router)
  {}
  aboutMe()
  {
    this.router.navigate(['about']);
  }
  contactInfo()
  {
    this.router.navigate(['contact']);
  }
  skills()
  {
    this.router.navigate(['skills']);
  }
  experience()
  {
    this.router.navigate(["experience"])
  }
  recommendations()
  {
    this.router.navigate(["recommendations"])
  }
}
