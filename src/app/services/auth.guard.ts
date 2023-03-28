import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:AuthService, private route:Router){}
  canActivate(){
    console.log("OnlyLoggedInUsers");
    if (this.service.getIsLoggedIn() && this.service.whoIs()=='user') {
      return true;
    } else {
      this.route.navigate(['/home'])
      return false;
    }
  }
}
