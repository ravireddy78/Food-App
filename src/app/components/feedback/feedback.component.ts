import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { FeedBack } from '../../model/model.user';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
users: any;
feedBack : FeedBack = new FeedBack();
  constructor(private service: AdminService) { }
  // feedbackDetails = new FormGroup({
  //   email: new FormControl('', [Validators.required]),
  //   message: new FormControl(
  //     '',
  //     [Validators.required]
  //   )
  // });
  custmail = new FormControl('', [Validators.required])
  message  = new FormControl('', [Validators.required])


  ngOnInit() {
  }
  
  feedbackSync() {
    // alert("Thanks For Your FeedBack")
    // console.log(this.feedbackDetails)
    const data = {
      custmail: this.custmail.value,
      message: this.message.value,
  }
  alert("Thanks for your precious feedback")
    console.log("==================>",data)

    this.service.sendfeedbackData(data).subscribe((response) => {
      
       console.log(response)
       if(response){
         console.log("Feedback Submited")
       }
       
     })
  
    }}
