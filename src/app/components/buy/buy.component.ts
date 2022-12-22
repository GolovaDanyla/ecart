import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent {



  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px'

    });
  }
  
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  buy(){
    
  }
}