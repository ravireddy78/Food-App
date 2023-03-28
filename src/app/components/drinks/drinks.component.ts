import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  public countSpinachJuice=0;
  public countCapsicumAnnuum=0;
  public countfanta=0;
  public countOrangeJuice=0;
  constructor() { }

  ngOnInit() {
  }
  addSpinachJuice(){
    this.countSpinachJuice = this.countSpinachJuice +1;
  }
  deleteSpinachJuice(){
    this.countSpinachJuice = this.countSpinachJuice -1;
  }
  addCapsicumAnnuum(){
    this.countCapsicumAnnuum = this.countCapsicumAnnuum +1;
  }
  deleteCapsicumAnnuum(){
    this.countCapsicumAnnuum = this.countCapsicumAnnuum -1;
  }
  addfanta(){
    this.countfanta = this.countfanta +1;
  }
  deletefanta(){
    this.countfanta = this.countfanta -1;
  }
  addOrangeJuice(){
    this.countOrangeJuice = this.countOrangeJuice +1;
  }
  deleteOrangeJuice(){
    this.countOrangeJuice = this.countOrangeJuice -1;
  }

}
