import { Component, OnInit } from '@angular/core';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5, inactive: false},
       {name: 'Space Camera', mass: 20, inactive: false},
       {name: 'Food', mass: 150, inactive: false},
       {name: 'Oxygen Tanks', mass: 400, inactive: false},
       {name: 'AE-35 Unit', mass: 5, inactive: false},
       {name: 'ISS Supplies', mass: 800, inactive: false},
       {name: 'Water', mass: 250, inactive: false},
       {name: 'Satellite', mass: 1200, inactive: false},
       {name: 'R2 Unit', mass: 32, inactive: false}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   redStat:boolean = false;
   empty:boolean = false;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   
   addItem = (equipmentItem) =>{
     this.cargoHold.push(equipmentItem);
     this.cargoMass += equipmentItem.mass;
     if(this.maximumAllowedMass-this.cargoMass<=200){
       this.redStat = true;
     }
  }
  disab = ()=>{
    for(let i=0; i<this.equipmentItems.length; i++){
      if((this.equipmentItems[i]["mass"] + this.cargoMass)>this.maximumAllowedMass 
          || this.cargoHold.length === this.maxItems){
        this.equipmentItems[i]["inactive"] = true;
      } 
    }
  }
  emptyArr = () => {
    this.cargoHold= [];
    this.cargoMass= 0;
    this.empty = true;
    for(let i=0; i<this.equipmentItems.length; i++){
      this.equipmentItems[i]["inactive"] = false;
    }
  }
   
}
