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
import { TopComponent } from './components/top/top.component';

const routes: Routes = [
  { path: '', redirectTo: 'ua/about-us', pathMatch: 'full' },
  { path: 'ua/products', component: ProductsComponent },
  { path: 'ru/products', component: ProductsComponent },
  { path: 'ua/products/:category', component: ProductsComponent },
  { path: 'ru/products/:category', component: ProductsComponent },
  // { path: 'ua/new', component: NewComponent },
  { path: 'ua/cart', component: CartComponent },
  { path: 'ru/cart', component: CartComponent },
  { path: 'ua/about-us', component: AboutUsComponent },
  { path: 'ru/about-us', component: AboutUsComponent },
  { path: 'ua/lot', component: LotComponent },
  { path: 'ru/lot', component: LotComponent },
  { path: 'ua/back', component: BackComponent },
  { path: 'ru/back', component: BackComponent },
  { path: 'ua/top', component: TopComponent },
  { path: 'ru/top', component: TopComponent },
  { path: 'ua/delivery', component: DeliveryComponent },
  { path: 'ru/delivery', component: DeliveryComponent },
  { path: 'ua/terms', component: TermsComponent },
  { path: 'ru/terms', component: TermsComponent },
  { path: 'ua/garant', component: GarantComponent },
  { path: 'ru/garant', component: GarantComponent },
  { path: 'ua/mastercard', component: MastercardComponent },
  { path: 'ru/mastercard', component: MastercardComponent },
  { path: 'ua/lot/:id', component: LotComponent },
  { path: 'ru/lot/:id', component: LotComponent },
  { path: '**', redirectTo: 'ru/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // useHash: true,
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
