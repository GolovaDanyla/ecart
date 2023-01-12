import { NgModule } from '@angular/core';
import { BrowserModule, TransferState } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';;
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { LotComponent } from './components/lot/lot.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BuyComponent, DialogAnimationsExampleDialog } from './components/buy/buy.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SwiperModule } from 'swiper/angular';
import { SwipelistComponent } from './controls/swipelist/swipelist.component';
import { TermsComponent } from './components/terms/terms.component';
import { BackComponent } from './components/back/back.component';
import { MastercardComponent } from './components/mastercard/mastercard.component';
import { MatMenuModule } from '@angular/material/menu';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { GarantComponent } from './components/garant/garant.component';
import { MatBadgeModule } from '@angular/material/badge';
import { NewComponent } from './components/new/new.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TopComponent } from './components/top/top.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { translateBrowserLoaderFactory } from './services/translate-browser.loader';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    LotComponent,
    BuyComponent,
    DialogAnimationsExampleDialog,
    SwipelistComponent,
    TermsComponent,
    BackComponent,
    MastercardComponent,
    DeliveryComponent,
    GarantComponent,
    NewComponent,
    AboutUsComponent,
    TopComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    MatTableModule,
    MatToolbarModule,
    SwiperModule,
    MatMenuModule,
    MatBadgeModule,
    MatButtonToggleModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
