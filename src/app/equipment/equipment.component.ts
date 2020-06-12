import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment = [{name:"Habitat dome", editingEquipment: false}, {name:"Drones", editingEquipment: false},
                {name:"Food containers", editingEquipment: false}, {name:"Oxygen tanks", editingEquipment: false}];

  constructor() { }

  ngOnInit() {
  }
  allEquip(){
    let names = [];
    for(let i=0; i<this.equipment.length; i++){
      names.push(this.equipment[i]["name"])
    } return names;
  }

  addEquip(equip){
    let object = {name: "", editingEquipment: false};
    object.name = equip;
    if(!this.allEquip().includes(equip)){
      this.equipment.push(object);
    }
  }
  removeEquip(equip){
    this.equipment.splice(this.equipment.indexOf(equip), 1)
  }
  updateEquip(newName:string, item) {
    this.equipment[this.equipment.indexOf(item)]["name"] = newName;
    item.editingEquipment = false;
  }
}
