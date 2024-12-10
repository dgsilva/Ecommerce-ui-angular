import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistreComponent } from './components/pages/registre/registre.component';
import { ShoppingCartComponent } from './components/pages/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCreateComponent } from './components/pages/product-create/product-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    LoginComponent,
    RegistreComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
