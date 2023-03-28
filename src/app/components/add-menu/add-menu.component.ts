import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service'
import  {AddItem}  from '../../model/model.user'
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  addItems : AddItem = new AddItem();
  constructor(private AdminService: AdminService, private router: Router) { }
  // itemmenuname = new FormControl('', [Validators.required])
  categoryid = new FormControl('', [Validators.required])
  itemname = new FormControl('', [Validators.required])
  price = new FormControl('', [Validators.required])
  food_description = new FormControl('', [Validators.required])
  ngOnInit() {
  }


  async addItem() {
    const data = {
      // itemmenuname: this.itemmenuname.value,
       categoryid: this.categoryid.value,
      itemname: this.itemname.value,
      price: this.price.value,
     
      food_description: this.food_description.value,
     
    }
    console.log("==================>",data)
    await this.AdminService.addItem(data).subscribe((response) => {
      console.log("add item ===============>", data);
      if(response){
        this.router.navigate(['/food-stock'])
       console.log("navigated");
      }
      
    })

  }
}
