import { Component, OnInit } from '@angular/core';
import { ActivatedRoute}from '@angular/router';
import { AdminService } from '../../services/admin.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
counts = {};
searchData : any = [];
  constructor(private activatedRoute:ActivatedRoute, private AdminService: AdminService) { }

  ngOnInit() {
  this.activatedRoute.params.subscribe(data =>{
    console.log(data)
    this.AdminService.getsearchFood(data['searchText']).subscribe(
    searchData => {
      if (searchData === null){
        this.searchData = []
      }
      else{
this.searchData = searchData;
      }
     
      console.log(searchData);
   }
  )
    });

}
increment(id){
  if (this.counts[id]){
    this.counts[id]++ ;
  }
  else{
    this.counts[id]=1
  }
}
decrement(id){
  if (this.counts[id]){
    this.counts[id]-- ;
  }
  else{
    this.counts[id]=1
  }
}
addToCart(item){
  const cartItem = this.AdminService.cartData[item.itemid]
  if (cartItem ){
cartItem.count = this.counts[item.itemid];
  }
  else{
    item.count = this.counts[item.itemid];
   this.AdminService.cartData[item.itemid]  = item;
  }
}
}
