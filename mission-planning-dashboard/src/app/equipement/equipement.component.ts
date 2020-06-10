import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.css']
})
export class EquipementComponent implements OnInit {
  title = 'Equipment';
  items = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks']
  constructor() { }

  ngOnInit() {
  }

}
