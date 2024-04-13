import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit
{

  Preficient: any[] = []
  moderate:any[] = []
  constructor() { }

  ngOnInit() {
    this.Preficient= [
      {
        title:"TypeScript",
        subtitle:"",
        img:"../../../assets/images/tech/typescript.png" ,
        rating:""

      },
       {
        title:"NodeJs",
        subtitle:"TypeScript",
        img:"../../../assets/images/tech/nodejs.png" ,
        rating:""

      },
       {
        title:"React",
        subtitle:"TypeScript",
        img:"../../../assets/images/tech/reactjs.png" ,
        rating:""

      },
       {
        title:"Python",
        subtitle:"",
        img:"../../../assets/images/tech/python.png" ,
        rating:""

      },

    ],
    this.moderate = [
      {
        title:"C/C++",
        img:"./../../assets/images/tech/c.png",
      },
       {
        title:"MYSQL",
        img:"./../../assets/images/tech/mysql.png",
      },
       {
        title:"AWS",
        img:"./../../assets/images/tech/aws.png",
      },
       {
        title:"JAVA",
        img:"./../../assets/images/tech/java.png",
      },
       {
        title:"DOCKER ",
        img:"./../../assets/images/tech/docker.png",
      },
       {
        title:"JavaScript",
        img:"./../../assets/images/tech/javascript.png",
      },
    ]
  }

}
