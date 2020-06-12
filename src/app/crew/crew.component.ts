import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false, editingName: false},
    {name: "Mae Jemison", firstMission: false, editingName: false},
    {name: "Ellen Ochoa", firstMission: true, editingName: false}
  ];

  

  constructor() { }

  ngOnInit() {
  }
  crewNames(){
    let names = [];
    for(let i=0; i<this.crew.length; i++){
      names.push(this.crew[i]["name"])
    } return names;
  }

  addCrew(member, stat){
    let object = {name: "", firstMission: false};
    object.name = member;
    object.firstMission = stat;
    if(!this.crewNames().includes(member)){
      this.crew.push(object);
    }
  }
  removeCrew(member){
    this.crew.splice(this.crew.indexOf(member), 1)
  }
  updateName(newName:string, member) {
    this.crew[this.crew.indexOf(member)]["name"] = newName;
    member.editingName = false;
  }

}
