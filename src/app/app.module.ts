import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import {AccountService} from './services/account.service';
import { ProfileComponent } from './components/profile/profile.component';
import {routing} from './app.routing';
import {UrlPermission} from './urlPermission/url.permissions';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { VegComponent } from './components/veg/veg.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DesertComponent } from './components/desert/desert.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { NonVegComponent } from './components/non-veg/non-veg.component';
import { SalesReportComponent } from './components/sales-report/sales-report.component';
import { FoodStockComponent } from './components/food-stock/food-stock.component';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { CartComponent } from './components/cart/cart.component';
import { StarterComponent } from './components/starter/starter.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SearchComponent } from './components/search/search.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    LogoutComponent,
    NotFoundComponent,
    HomeComponent,
    FeedbackComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    AdminComponent,
    AdminLoginComponent,
    PizzaComponent,
    VegComponent,
    DesertComponent,
    DrinksComponent,
    NonVegComponent,
    SalesReportComponent,
    FoodStockComponent,
    AddMenuComponent,
    CartComponent,
    StarterComponent,
    ContactUsComponent,
    SearchComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    AccountService,
    UrlPermission
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
