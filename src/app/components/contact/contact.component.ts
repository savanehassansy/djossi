import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
contact:any[] =[]
  constructor() { }

  ngOnInit() {
    this.contact = [
      {
        title:"Email",
        subtitle: "example@gmail.com",
        icon:"../../../assets/images/email.png",
        arrowIcon:"../../../assets/images/right-arrow.png"
      },
       {
        title:"LinkedIn",
        subtitle: "example user name ",
        icon:"../../../assets/images/linkedin (2).png",
        arrowIcon:"../../../assets/images/right-arrow.png"
      },
       {
        title:"Github",
        subtitle: "example user bud",
        icon:"../../../assets/images/github.png",
        arrowIcon:"../../../assets/images/right-arrow.png"
      }
    ]
  }

}
