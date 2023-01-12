import { Component } from '@angular/core';
import { CartapiService } from './services/cartapi.service';
import { TranslateService } from '@ngx-translate/core';


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
    public translate: TranslateService
  ) {
    translate.addLangs(['ru', 'ua']);
    translate.setDefaultLang('ru');

    // const browserLang: any = translate.getBrowserLang();
    // translate.use(browserLang.match(/ru|ua/) ? browserLang : 'ru');
  }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res => {
      this.totalItemNumber = res.length;
    })
  }
}
