import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit {
  public countChickenTikka=0;
  public countChicken65=0;
  public countChickenLolipop=0;
  public countTandooriChicken=0;

  constructor() { }

  ngOnInit() {
  }
  addChickenTikka(){
    this.countChickenTikka = this.countChickenTikka +1;
  }
  deleteChickenTikka(){
    this.countChickenTikka = this.countChickenTikka -1;
  }
  addChicken65(){
    this.countChicken65 = this.countChicken65 +1;
  }
  deleteChicken65(){
    this.countChicken65= this.countChicken65 -1;
  }
  addChickenLolipop(){
    this.countChickenLolipop = this.countChickenLolipop +1;
  }
  deleteChickenLolipop(){
    this.countChickenLolipop = this.countChickenLolipop -1;
  }
  addTandooriChicken(){
    this.countTandooriChicken = this.countTandooriChicken +1;
  }
  deleteTandooriChicken(){
    this.countTandooriChicken = this.countTandooriChicken -1;
  }
}
