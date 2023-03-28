import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service'
import { AddItem } from '../../model/model.user'
import { Validators, FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-stock',
  templateUrl: './food-stock.component.html',
  styleUrls: ['./food-stock.component.css']
})
export class FoodStockComponent implements OnInit {
  data:any;
  editdata:any;
  deleteEmployeeModal : boolean = false;
  addItems: AddItem = new AddItem();
  itemId = new FormControl('');
  itemname = new FormControl('', [Validators.required])
  price = new FormControl('', [Validators.required])
  food_description = new FormControl('', [Validators.required])

  
  constructor(private AdminService: AdminService, private router: Router) {
     this.getAllItems();
   }

  ngOnInit() {
    this.getAllItems();

  }

  getAllItems(){
      this.AdminService.getAllItem()
      .subscribe((response) => {
        this.data = response;
        console.log("get item ===============>", this.data);
      }, (error) => {
      });
  }

  ngOnViewInit(){
    this.AdminService.getAllItem()
      .subscribe((response) => {
        this.data = response;
        console.log("get item ===============>", this.data);
      }, (error) => {
      });
  }

  editItem(itemId:any) {
    console.log("==================>", itemId)
    this.AdminService.getitemIdData(itemId)
      .subscribe((response) => {
        this.editdata = response;
        console.log("edit item ===============>", this.editdata);
      }, (error) => {
      });
       this.getAllItems();
  }

  
    // console.log("==================>", itemId)
  //   await this.AdminService.deleteitemIdData(itemId)
  //     .subscribe((response) => {
  //       console.log("delete item ===============>", response);
  //     }, (error) => {
  //     });
  // }
 deleteItem(itemId:any) {
   // this.deleteEmployeeModal = !this.deleteEmployeeModal;
  this.AdminService.deleteitemIdData(itemId).subscribe((response) => {
    console.log("add item ===============>", itemId);
    if(response){
      this.router.navigate(['/food-stock'])
     console.log("navigated");
    }
  })

}

  deleteData() {
    // this.deleteEmployeeModal = !this.deleteEmployeeModal;
    this.router.navigate(['/food-stock'])
  }

  saveUpdate(itemId:any) {
    const data = {
      itemname: this.itemname.value,
      price: this.price.value,
      food_description: this.food_description.value,
      categoryid: this.editdata.categoryid
    }
    alert("Data will be Added")
    // this.router.navigateByUrl('food-stock')
    console.log("==================>", data)
    this.AdminService.putItem(itemId, data)
      .subscribe((response) => {
        console.log("Put item ===============>", data);
        this.getAllItems()
      }, (error) => {
      });
  }

}
