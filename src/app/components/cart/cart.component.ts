import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor( public AdminService: AdminService) { }

  ngOnInit() {

console.log(this.AdminService.cartData);
  }
  values(a:any){
    return Object.values(a)
  }
placeOrder(){
 let totalCount = 0;
 if (this.AdminService.cartData){
  const values =this.values(this.AdminService.cartData);
  for(let value of values){
    // totalCount += (value.count*value.price);
  }
//  }
//  if (totalCount!=0){
//    this.AdminService.placeOrder(totalCount).subscribe(data => {
//      console.log("success");
//    })
//  }
}
}}
