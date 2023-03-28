import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  public countFarmHouse=0;
  public countPeepyPaneer=0;
  public countMexicanGreenWave=0;
  public countIndiTandooriPaneer=0;

  constructor() { }

  ngOnInit() {
  }
  addFarmHouse(){
    this.countFarmHouse = this.countFarmHouse +1;
  }
  deleteFarmHouse(){
    this.countFarmHouse = this.countFarmHouse -1;
  }
  addPeepyPaneer(){
    this.countPeepyPaneer = this.countPeepyPaneer +1;
  }
  deletePeepyPaneer(){
    this.countPeepyPaneer = this.countPeepyPaneer -1;
  }
  addMexicanGreenWave(){
    this.countMexicanGreenWave = this.countMexicanGreenWave +1;
  }
  deleteMexicanGreenWave(){
    this.countMexicanGreenWave = this.countMexicanGreenWave -1;
  }
  addIndiTandooriPaneer(){
    this.countIndiTandooriPaneer = this.countIndiTandooriPaneer +1;
  }
  deleteIndiTandooriPaneer(){
    this.countIndiTandooriPaneer = this.countIndiTandooriPaneer -1;
  }

}
