import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  crewStat:string = "FULL";

  candidates: object[] = [
    {name: "Sally Ride", nickname: "Nickname: Doc", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg', selec: false, imgSelec: false, mouseov: false},
    {name: "Mae Jemison",nickname: "Nickname: Bolt", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg', selec: false, imgSelec: false, mouseov: false},
    {name: "Ellen Ochoa", nickname: "Nickname: Hoot", photo:'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg', selec: false, imgSelec: false, mouseov: false},
    {name: "Frederick Gregory", nickname: "Nickname: The King", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg', selec: false, imgSelec: false, mouseov: false},
    {name: "Guion Bluford", nickname: "Nickname: Gus", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg', selec: false, imgSelec: false, mouseov: false},
    {name: "Kjell Lindgren", nickname: "Nickname: Whatshisname", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg', selec: false, imgSelec: false, mouseov: false},
    {name: "Jeanette Epps", nickname: "Nickname: Rusty", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg', selec: false, imgSelec: false, mouseov: false}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember = (candidate) => {
    if(!this.crew.includes(candidate)){
      if(this.crew.length < 3){
        this.crew.push(candidate);
        candidate.selec = true;
      }
    } else{
      this.crew.splice(this.crew.indexOf(candidate), 1);
      candidate.selec = false;
    }
  }


  pointerOver = (candidate) => {
    candidate.mouseov = true;
  }
  pointerOut = (candidate) => {
    candidate.mouseov = false;
  }

}
