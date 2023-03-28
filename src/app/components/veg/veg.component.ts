import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent implements OnInit {
  public countKadhaiPaneer=0;
  public countFriedRice=0;
  public countGobiFry=0;
  public countBiryani=0;

  constructor() { }

  ngOnInit() {
  }
  addKadhaiPaneer(){
    this.countKadhaiPaneer = this.countKadhaiPaneer +1;
  }
  deleteKadhaiPaneer(){
    this.countKadhaiPaneer = this.countKadhaiPaneer -1;
  }
  addFriedRice(){
    this.countFriedRice = this.countFriedRice +1;
  }
  deleteFriedRice(){
    this.countFriedRice = this.countFriedRice -1;
  }
  addGobiFry(){
    this.countGobiFry = this.countGobiFry +1;
  }
  deleteGobiFry(){
    this.countGobiFry = this.countGobiFry -1;
  }
  addBiryani(){
    this.countBiryani = this.countBiryani +1;
  }
  deleteBiryani(){
    this.countBiryani = this.countBiryani -1;
  }

}
