import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
users: any;
data:any ;
  constructor(private router: Router,private service:AdminService) { }

  // feedbackDetails = new FormGroup({
  //   email : new FormControl('', [Validators.required]),
  // message : new FormControl('', [Validators.required])
  // })
  
// feedback(){
//   this.service.viewfeedback(this.feedbackDetails)
//   console.log("feedback")
// }

// salesreportDetails = new FormGroup({
//   orderid : new FormControl('', [Validators.required]),
//   custid : new FormControl('', [Validators.required]),
//   totalcost : new FormControl('', [Validators.required]),
//   orderdate : new FormControl('', [Validators.required])
// })
ngOnInit() {
  this.service.viewfeedback().subscribe((response) => {
    this.data = response;
    console.log(this.data)
    if(response){
      console.log("Feedback Submited")
    }
    
    // console.log("=========",this.adminData)
    
})
this.service.getsales().subscribe((response) => {
      this.users = response;
      console.log(this.users)
      if(response){
        console.log("sales reported")
      }
    })
}
 
}
