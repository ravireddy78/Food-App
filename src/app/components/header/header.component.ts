import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  adminData = localStorage.getItem('AdminLogin')
  custData = localStorage.getItem('CustomerLogin')
  public searchText:any ;
  constructor(private router : Router, private service: AdminService) { }

  ngOnInit() {
     this.adminData = localStorage.getItem('AdminLogin')
  this.custData = localStorage.getItem('CustomerLogin')
  }

  logoutAdmin(){
    localStorage.removeItem('AdminLogin');
    localStorage.removeItem('CustomerLogin');
    this.adminData = null;
    this.custData = null;
    this.router.navigate(['/home'])
  }

  findfood(){
    this.router.navigate(['search' , this.searchText]);
//  this.service.getsearchFood(this.searchText).subscribe(
//    data => {
//      console.log(data);
//    }
//  )
 
  }

}
