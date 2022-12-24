import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent {
  @Input() data: any;


  constructor(public dialog: MatDialog,
    ) { }

  openDialog(): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      data: this.data
    });
  }

}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogAnimationsExampleDialog {
  name = '';
  phone = '';
  constructor(
    public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private snackBar: MatSnackBar,
    private cartApi: CartapiService
  ) { }

  buy() {
    const phone = this.phone;
    const name = this.name;
    const offer = this.data.list.join(', ') + ' | ' + this.data.total//JSON.stringify(this.data);
    this.apiService.sendBot(offer, phone, name);
    console.log('BYE');
    setTimeout(() => {
      this.dialogRef.close();
    }, 300);
    this.cartApi.removeAllCart();
    let snackBarRef = this.snackBar.open(`Дякуємо за замовлення, ${name}! 
    З Вами зв'яжуться на протязі 10 хвилин для уточненя замовлення.`, '', { duration: 7000 });

  }
}