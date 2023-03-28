export class User {
  id: string;
  username = '';
  password = '';
  fullName = '';

}

export class AddItem{
  categoryid: number;
  itemname: string;
  price: number;
  food_description: string;
}


export class FeedBack{
  custmail: string;
  message : string;
}


export class AdminLogin{
  adusrname : String;
  adpassword : String;
}
export class SalesReport{
  orderid : number;
  custid : number;
  totalcost: number;
  orderdate: string;
}

export class CustomerLogin{
  custmail : String;
   custpass : String;
}

export class CustomerRegister{
  custname : String;
  custmail : String;
   custpass : String;
   custmobileno : String;
   custaddress : String;
}