import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects:any[]=[]
  constructor() { }

  ngOnInit() {
    this.projects = [
      {
        title: 'Lorem ipsuum',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        img: '../../../assets/images/help.png',
        link: '',
      },
       {
        title: 'Lorem ipsuum',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        img: '../../../assets/images/help.png',
        link: '',
      },
       {
        title: 'Lorem ipsuum',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        img: '../../../assets/images/help.png',
        link: '',
      },
    ];
  }

}
