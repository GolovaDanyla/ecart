import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  productList: any;
  topId: string = '';
  totalItemNumber: number = 0;

  constructor(
    private api: ApiService,
    private cartApi: CartapiService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
    ) {
      this.route.params.subscribe(params => {
      console.log({ params });
      const top = params['top'];
      this.topId = top;

      this.api.getProduct().subscribe(res => {
        this.productList = res;
        if (this.topId) {
          this.productList = this.productList.filter((item: any) => {
            return item?.top == this.topId;
          })
        }
        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        });
      })
    }); }

  ngOnInit() {
    
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
