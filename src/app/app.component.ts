import { Component } from '@angular/core';
import { CartapiService } from './services/cartapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecart';
  totalItemNumber: number = 0;
  constructor(
    private cartApi: CartapiService,
  ) {
  }
  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res => {
      this.totalItemNumber = res.length;
    })
  }
}
