import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AdminLogin} from '../../model/model.user'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminLogin : AdminLogin = new AdminLogin();

  constructor(private http: HttpClient, private router: Router, private service: AdminService) { }

  // userDetails = new FormGroup({
  //   adusrname: new FormControl('', [Validators.required]),
  //   adpassword: new FormControl(
  //     '',
  //     [Validators.required]
  //   )
  // });

  adusrname = new FormControl('', [Validators.required])
  adpassword = new FormControl('', [Validators.required])

  ngOnInit(): void {

  }

  async loginSync() {
      // adusrname = this.adusrname.value
      // adpassword = this.adpassword.value
   await this.service.adminLogin(this.adusrname.value, this.adpassword.value).subscribe((response) => {
    this.router.navigate(['/admin'])
      // if(response){
      //   //  localStorage.setItem('AdminLogin', this.adusrname.value);
      //   this.router.navigate(['/admin'])
      //   console.log("navigated");
      // }
    })
  }

}

