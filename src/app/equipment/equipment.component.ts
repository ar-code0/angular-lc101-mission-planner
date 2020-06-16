import { Component, OnInit } from '@angular/core';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5, inactive: false, remove:true},
       {name: 'Space Camera', mass: 20, inactive: false, remove:true},
       {name: 'Food', mass: 150, inactive: false, remove:true},
       {name: 'Oxygen Tanks', mass: 400, inactive: false, remove:true},
       {name: 'AE-35 Unit', mass: 5, inactive: false, remove:true},
       {name: 'ISS Supplies', mass: 800, inactive: false, remove:true},
       {name: 'Water', mass: 250, inactive: false, remove:true},
       {name: 'Satellite', mass: 1200, inactive: false, remove:true},
       {name: 'R2 Unit', mass: 32, inactive: false, remove:true}
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
    if(!this.cargoHold.includes(equipmentItem)){
      this.cargoHold.push(equipmentItem);
      this.cargoMass += equipmentItem.mass;
      if(this.maximumAllowedMass-this.cargoMass<=200){
         this.redStat = true;
       }
    }

  }
  disab = ()=>{
    for(let i=0; i<this.equipmentItems.length; i++){
      if(this.cargoHold.includes(this.equipmentItems[i])){
        this.equipmentItems[i]["remove"] = false;
        this.equipmentItems[i]["inactive"] = true;
        // if((this.equipmentItems[i]["mass"] + this.cargoMass)>this.maximumAllowedMass 
        //     || this.cargoHold.length >= this.maxItems){ 
        }
      if(!this.cargoHold.includes(this.equipmentItems[i])){   
        this.equipmentItems[i]["remove"] = true;
        if((this.equipmentItems[i]["mass"] + this.cargoMass)>this.maximumAllowedMass 
        || this.cargoHold.length >= this.maxItems){
          this.equipmentItems[i]["inactive"] = true;
        } else {
          this.equipmentItems[i]["inactive"] = false;
        }
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
  removeItem = (item) => {
    if(this.cargoHold.includes(item)){
      this.cargoHold.splice(this.cargoHold.indexOf(item), 1);
      this.cargoMass -= item.mass;
    }
  }
  // disabRemove = ()=>{
  //   for(let i=0; i<this.equipmentItems.length; i++){
  //     if(this.cargoMass - this.equipmentItems[i]["mass"] < 0 || !this.cargoHold.includes(this.equipmentItems[i])){
  //       this.equipmentItems[i]["remove"] = true;
  //       if((this.equipmentItems[i]["mass"] + this.cargoMass)<=this.maximumAllowedMass 
  //         || this.cargoHold.length < this.maxItems || !this.cargoHold.includes(this.equipmentItems[i])){
  //         this.equipmentItems[i]["inactive"] = false;
  //       }
  //     } 
  //   }
  // }
}
