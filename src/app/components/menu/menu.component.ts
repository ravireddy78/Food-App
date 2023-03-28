import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public countPizza = 0;
  public countBurger = 0;
  public countPanipuri=0;
  public countChicken65=0;
  public countChips=0;
  public countKulcha=0;
  public countNaan=0;
  public countPaneer=0;
  public countCabbage=0;
  public countManchurian=0;
  public countGulabjamun=0;
  public countFriedrice=0;
  public countDalbati=0;
  public countFishcurry=0;
  public countIcecream=0;
  public countKebab=0;
  public countGreensalad=0;
  public countFreshjuice=0;
  public count = 0;
  constructor() { }

  ngOnInit() {
  }
  addItem() {
    this.count = this.count + 1;
    // console.log(this.count);
  }
  deleteItem(){
    // console.log(this.count);

    this.count = this.count - 1;

  }
  addPizza(){
    this.countPizza = this.countPizza + 1;
  }
  deletePizza(){
    this.countPizza = this.countPizza - 1;
  }
  addBurger(){
    this.countBurger = this.countBurger + 1;

  }
  deleteBurger(){
    this.countBurger = this.countBurger - 1;
  }
  addPanipuri(){
    this.countPanipuri = this.countPanipuri + 1;
  }
  deletePanipuri(){
    this.countPanipuri = this.countPanipuri - 1;
  }
  addChicken65(){
    this.countChicken65 = this.countChicken65+ 1; 
  }
  deleteChicken65(){
    this.countChicken65 = this.countChicken65 - 1;
  }
  addChips(){
    this.countChips = this.countChips + 1;
  }
  deleteChips(){
    this.countChips = this.countChips - 1;
  }
  addKulcha(){
    this.countKulcha = this.countKulcha + 1;
  }
  deleteKulcha(){
    this.countKulcha = this.countKulcha - 1;
  }
  addNaan(){
    this.countNaan = this.countNaan + 1;
  }
  deleteNaan(){
    this.countNaan = this.countNaan - 1;
  }
  addPaneer(){
    this.countPaneer = this.countPaneer + 1; 
  }
  deletePaneer(){
    this.countPaneer = this.countPaneer - 1;
  }
  addCabbage(){
    this.countCabbage = this.countCabbage +1;
  }
  deleteCabbage(){
    this.countCabbage = this.countCabbage -1;
  }
  addManchurian(){
    this.countManchurian = this.countManchurian +1;
  }
  deleteManchurian(){
    this.countManchurian = this.countManchurian -1;
  }
  addGulabjamun(){
this.countGulabjamun = this.countGulabjamun +1;
  }
  deleteGulabjamun(){
    this.countGulabjamun =this.countGulabjamun -1;
  }
  addFriedrice(){
    this.countFriedrice = this.countFriedrice +1;
  }
  deleteFriedrice(){
    this.countFriedrice = this.countFriedrice -1;
  }
  addDalbati(){
    this.countDalbati = this.countDalbati +1;
  }
  deleteDalbati(){
    this.countDalbati = this.countDalbati -1;
  }
  addFishcurry(){
    this.countFishcurry = this.countFishcurry +1;
  }
  deleteFishcurry(){
    this.countFishcurry = this.countFishcurry -1;
  }
  addIcecream(){
    this.countIcecream = this.countIcecream +1;
  }
  deleteIcecream(){
    this.countIcecream = this.countIcecream -1;
  }
  addKebab(){
    this.countKebab = this.countKebab +1;
  }
  deleteKebab(){
    this.countKebab = this.countKebab -1;
  }
  addGreensalad(){
    this.countGreensalad = this.countGreensalad +1;
  }
  deleteGreensalad(){
    this.countGreensalad = this.countGreensalad -1;
  }
  addFreshjuice(){
    this.countFreshjuice = this.countFreshjuice +1;
  }
  deleteFreshjuice(){
    this.countFreshjuice = this.countFreshjuice -1;
  }
}
