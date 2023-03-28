import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-non-veg',
  templateUrl: './non-veg.component.html',
  styleUrls: ['./non-veg.component.css']
})
export class NonVegComponent implements OnInit {
  public countChillyChickenGravy=0;
  public countChickenFriedRice=0;
  public countFishCurry=0;
  public countKadhaiChicken=0;

  constructor() { }

  ngOnInit() {
  }
  addChillyChickenGravy(){
    this.countChillyChickenGravy = this.countChillyChickenGravy +1;
  }
  deleteChillyChickenGravy(){
    this.countChillyChickenGravy = this.countChillyChickenGravy -1;
  }
  addChickenFriedRice(){
    this.countChickenFriedRice = this.countChickenFriedRice +1;
  }
  deleteChickenFriedRice(){
    this.countChickenFriedRice = this.countChickenFriedRice -1;
  }
  addFishCurry(){
    this.countFishCurry = this.countFishCurry +1;
  }
  deleteFishCurry(){
    this.countFishCurry = this.countFishCurry -1;
  }
  addKadhaiChicken(){
    this.countKadhaiChicken = this.countKadhaiChicken +1;
  }
  deleteKadhaiChicken(){
    this.countKadhaiChicken = this.countKadhaiChicken -1;
  }

}
