import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: object[] = [{name:'Moon soil sample', selec:false}, {name:'Plant growth in orbit', selec:false}, 
                            {name:'Human bone density changes', selec:false}, {name:'Water droplet podcast for grades K-5', selec:false}, 
                            {name:'Satellite launch', selec:false}];
   chosenExperiments: string[] = [];
   experimentStat:string = "FULL";
   constructor() { }

   ngOnInit() { }

   addExp = (item) => {
    if(!this.chosenExperiments.includes(item)){
      if(this.chosenExperiments.length < 3){
        this.chosenExperiments.push(item);
        item.selec = true;
      }
    } else{
      this.chosenExperiments.splice(this.chosenExperiments.indexOf(item), 1);
      item.selec = false;
    }
  }

}
