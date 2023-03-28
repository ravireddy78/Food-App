import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ProfileComponent} from './components/profile/profile.component';
import {UrlPermission} from './urlPermission/url.permissions';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { VegComponent } from './components/veg/veg.component';
import { NonVegComponent } from './components/non-veg/non-veg.component';
import { DesertComponent } from './components/desert/desert.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { StarterComponent } from './components/starter/starter.component';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { FoodStockComponent } from './components/food-stock/food-stock.component';
import {CartComponent}       from './components/cart/cart.component';
import {SearchComponent}       from './components/search/search.component';
import {  SalesReportComponent } from './components/sales-report/sales-report.component';
import {PaymentComponent }       from './components/payment/payment.component';
import {ContactUsComponent }       from './components/contact-us/contact-us.component';

// import { AuthGuard } from './services/auth.guard';






const appRoutes: Routes = [
  { path: '', component: HomeComponent,pathMatch:"full" },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent , canActivate: [UrlPermission] },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'pizza', component: PizzaComponent },
  { path: 'veg', component: VegComponent },
  { path: 'non-veg', component: NonVegComponent },
  { path: 'desert', component: DesertComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'starter', component: StarterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'add-menu', component: AddMenuComponent },
  { path: 'food-stock', component: FoodStockComponent },
  { path: 'checkout', component: CartComponent },
  { path: 'sales-report', component: SalesReportComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'about', component: AboutComponent },
   { path: 'search/:searchText', component: SearchComponent },
   { path: 'payment', component: PaymentComponent },
  { path: 'contact-us', component: ContactUsComponent },
 

  // otherwise redirect to profile
  { path: '**', redirectTo: '/not-found' }
];

export const routing = RouterModule.forRoot(appRoutes);
