import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList: any;
  categoryId: string = '';
  totalItemNumber: number = 0;

  constructor(
    private api: ApiService,
    private cartApi: CartapiService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      console.log({ params });
      const category = params['category'];
      this.categoryId = category;

      this.api.getProduct().subscribe(res => {
        this.productList = res;
        if (this.categoryId) {
          this.productList = this.productList.filter((item: any) => {
            return item?.category == this.categoryId;
          })
        }
        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        });
      })
    });

  }
  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res => {
      this.totalItemNumber = res.length;
    })

  }
  addToCart(item: any) {
    this.cartApi.addToCart(item);
    let snackBarRef = this.snackBar.open(`Ви додали у кошик - ${item.title}`, '', { duration: 1500 });
  }
  getImage(item: any) {
    if (item.image instanceof Array) {
      return item.image[0];
    }
    return item.image;
  }
}
