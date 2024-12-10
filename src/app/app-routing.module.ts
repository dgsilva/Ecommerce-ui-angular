import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './components/pages/products/products.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistreComponent } from './components/pages/registre/registre.component';
import { ShoppingCartComponent } from './components/pages/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';

const routes: Routes = [
  {path: '',pathMatch: 'full', redirectTo: 'Loja-de-produtos'}, // raiz do projeto
  {path:'loja-de-produtos', component:ProductsComponent},
  {path:'acessar-conta', component:LoginComponent},
  {path:'cadastrar-conta', component:RegistreComponent},
  {path:'carrinho-de-compras', component: ShoppingCartComponent},
  {path:'finalizar-pedido', component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
