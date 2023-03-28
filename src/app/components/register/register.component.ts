import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User, CustomerRegister} from '../../model/model.user';
import {AccountService} from '../../services/account.service';
import {Router} from '@angular/router';
import { AdminService } from '../../services/admin.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component( {
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  customerRegister : CustomerRegister = new CustomerRegister();
  errorMessage: any;
  custname = new FormControl('', [Validators.required])
  custmail = new FormControl('', [Validators.required])
  custpass = new FormControl('', [Validators.required])
  custmobileno = new FormControl('', [Validators.required])
  custaddress = new FormControl('', [Validators.required])

  constructor(public accountService: AccountService, public router: Router,private service: AdminService) {
  }

  ngOnInit() {
  }

  async register() {
    // this.accountService.createAccount(this.user).subscribe(data => {
    //     this.router.navigate(['/login']);
    //   }, err => {
    //     console.log(err);
    //     this.errorMessage = 'username already exist';
    //   }
    // );

    const data = {
      custname : this.custname.value,
      custmail : this.custmail.value,
      custpass : this.custpass.value,
      custmobileno : this.custmobileno.value,
      custaddress : this.custaddress.value
    }
    await this.service.customerRegister(data).subscribe((response) => {
      if(response){
        this.router.navigate(['/login'])
        console.log("navigated");
      }
    })

  }
}
