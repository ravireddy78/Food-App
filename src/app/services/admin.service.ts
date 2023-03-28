import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
food : any;
users:any;
cartData ={};
  constructor(private http : HttpClient) { }
  ngOnInit() {

  }
//  127.0.0.1:
  adminLogin(adusrname, adpassword){
    return this.http.get("http://127.0.0.1:8081/Admin/login/" + adusrname + "/" + adpassword);
  }

  customerLogin(custmail, custpass){
    return this.http.get("http://127.0.0.1:8081/customer/login/" + custmail + "/" + custpass);
  }

  customerRegister(data){
    return this.http.get("http://127.0.0.1:8081/registration", data);
  }

  addItem(body) {
    return this.http.post("http://127.0.0.1:8081/items/menu", body);
  }
  getAllItem() {
    return this.http.get("http://127.0.0.1:8081/items/allmenu");
  }
  putItem(itemId,data) {
    return this.http.put('http://127.0.0.1:8081/items/menu/' + itemId , data);
  }
  getitemIdData(itemId){
    return this.http.get('http://127.0.0.1:8081/items/menu/' + itemId)
  }
  deleteitemIdData(itemId){
    return this.http.delete('http://127.0.0.1:8081/items/menu/' + itemId)
  }
sendfeedbackData(feedbackDetails){
  // const headers = new HttpHeaders({'Content-Type':'application/json'})
  return this.http.post("http://127.0.0.1:8081/feedback ",feedbackDetails);
}
viewfeedback(){
  return this.http.get("http://127.0.0.1:8081/viewfeedback");
}

getsales(){
  return this.http.get("http://127.0.0.1:8081/getsales/2016-2-08/2020-06-16");
}
  // placrOrderItem(CUST_ID,TXN_AMOUNT,ORDER_ID) {
  //   return this.http.put('http://127.0.0.1:8080/pgredirect' + CUST_ID,TXN_AMOUNT,ORDER_ID);
  // }
  getsearchFood(searchText){
    return this.http.get('http://127.0.0.1:8081/searchfood/' + searchText)
  }
// placeOrder(totalAmount){
//   return this.http.post('http://127.0.0.1:8080/pgredirect/' + new Date().getTime() + '/' +  totalAmount + '/' + new Date().getTime() )
// }

}

