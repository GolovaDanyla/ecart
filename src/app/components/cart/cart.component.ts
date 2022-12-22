import { Component } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogAnimationsExampleDialog } from '../buy/buy.component';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {
  products: any = [];
  allProducts: any = 0;
  totalItemNumber: number = 0;
  constructor(
    private cartApi: CartapiService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    
  }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res => {
      this.products = res;
      this.allProducts = this.cartApi.getTotalAmount();
    })
    this.cartApi.getProductData().subscribe(res => {
      this.totalItemNumber = res.length;
    })

  }
  openDialog(): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      // width: '500px'

    });
  }
  removeProduct(item: any) {
    this.cartApi.removeCartData(item);
  }
  removeAllProduct() {
    this.cartApi.removeAllCart();
  }
  buyNow() {
    this.openDialog();
    // let snackBarRef = this.snackBar.open("Ви придбали цю хуйню", '', { duration: 1500 });
  }
}
