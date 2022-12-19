import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList: any;
  constructor(
    private api: ApiService,
    private cartApi: CartapiService) {

  }
  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    })
  }
  addToCart(item: any) {
this.cartApi.addToCart(item);
  }

}
