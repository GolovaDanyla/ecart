import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.scss']
})
export class LotComponent {
  productItem: any;
  totalItemNumber: number = 0;
  constructor(
    private api: ApiService,
    private cartApi: CartapiService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
      this.route.params.subscribe(params => {
        console.log({params});
        const id = +params['id'];
        this.apiService.getProduct().subscribe(data => {
          this.productItem = data[id];
          console.log(this.productItem);
        })
      });
  }
  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res => {
      this.totalItemNumber = res.length;
    })
    // this.api.getProduct().subscribe(res => {
    //   this.productList = res;
    //   this.productList.forEach((a: any) => {
    //     Object.assign(a, { quantity: 1, total: a.price });
    //   });
    // })
  }
  addToCart(item: any) {
    this.cartApi.addToCart(item);
    let snackBarRef = this.snackBar.open(`Ви додали у кошик - ${item.title}`, '', { duration: 1500 });
  }
}
