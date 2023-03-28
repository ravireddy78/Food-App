import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CustomerLogin } from '../../model/model.user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AdminService } from '../../services/admin.service';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  customerLogin : CustomerLogin = new CustomerLogin();

  errorMessage: any;
  // formGroup: FormGroup;
  constructor(private authService: AuthService, private router: Router,private service: AdminService) { }

  custmail = new FormControl('', [Validators.required])
  custpass = new FormControl('', [Validators.required])

  ngOnInit() {

    // this.formGroup = new FormGroup({
    //   Email: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    //   ]),
    //   Password: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(8),
    //     Validators.maxLength(20)
    //   ])
    // });
  }
  async login() {
    // this.authService.authenticate(this.user, (e) => {
    //   this.router.navigateByUrl('/profile');
    //   console.log(e);
    //   let resp: any;
    //   resp = e.principal;
    //   // this.user.fullName = 'ndh';
    //   if (resp) {
    //     // store user details  in local storage to keep user logged in between page refreshes
    //     localStorage.setItem('currentUser', JSON.stringify(resp));
    //     this.authService.whoIsLogIn('user');
    //     this.router.navigate['/menu']
    //   }
    // });
    await this.service.customerLogin(this.custmail.value, this.custpass.value).subscribe((response) => {
      if(response){
         localStorage.setItem('CustomerLogin', this.custmail.value);
        this.router.navigate(['/menu'])
        console.log("navigated");
      }
    })


  }
}
