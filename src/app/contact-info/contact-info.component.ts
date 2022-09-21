import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  user:any={"Name":"Rohan","Email":"rohanrtd9@gmail.com","DOB":"09/09/1994","Languages":"Hindi, English"
,"Address":"Prayagraj","MobileNo":"9628386502","Linkedin":"linkedin/in/aroh9","CodeChef":"codechef.com/users/rohanrtd9",
"Summary":"It professional skilled in development, design and maintenance of enterprise software solution. Adept at ideating, coding tools and applications of administration, analysis and automation."}
  constructor() { }

  ngOnInit(): void {
  }

}
