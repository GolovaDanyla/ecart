import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BackComponent } from './components/back/back.component';
import { CartComponent } from './components/cart/cart.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { GarantComponent } from './components/garant/garant.component';
import { LotComponent } from './components/lot/lot.component';
import { MastercardComponent } from './components/mastercard/mastercard.component';
import { NewComponent } from './components/new/new.component';
import { ProductsComponent } from './components/products/products.component';
import { TermsComponent } from './components/terms/terms.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:category', component: ProductsComponent },
  { path: 'new', component: NewComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'lot', component: LotComponent },
  { path: 'back', component: BackComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'garant', component: GarantComponent },
  { path: 'mastercard', component: MastercardComponent },
  { path: 'lot/:id', component: LotComponent },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // useHash: true,
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
