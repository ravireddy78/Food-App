import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {

  users: any;
  constructor(private service: AdminService) { }

  salesreportDetails = new FormGroup({
    customername: new FormControl('', [Validators.required]),
    transactionid: new FormControl('',[Validators.required]),
    cost: new FormControl('',[Validators.required]),
    date: new FormControl('',[Validators.required]
    )
  });

  ngOnInit() {
  }
  async feedbackSync() {
    alert("Thanks For Your FeedBack")
    console.log(this.salesreportDetails)
    await this.service.sendfeedbackData(this.salesreportDetails).subscribe((response) => {
       console.log(response)
       if(response){
         console.log("Feedback Submited")
       }
       
     })
  
    }}

  


