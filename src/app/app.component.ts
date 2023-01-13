import { Component, Inject } from '@angular/core';
import { CartapiService } from './services/cartapi.service';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecart';
  totalItemNumber: number = 0;
  lang: string = 'ua';
  constructor(
    private cartApi: CartapiService,
    private router: Router,
    public translate: TranslateService,
    @Inject(DOCUMENT) private document: any
  ) {
    translate.addLangs(['ru', 'ua']);
    translate.setDefaultLang('ua');
    console.log({ URL: this.document.location.href });
    this.lang = new RegExp('\/ru\/').test(this.document.location.href) ? 'ru' : 'ua';
    translate.use(this.lang);
  }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res => {
      this.totalItemNumber = res.length;
    })
  }
  setLang(lang: 'ua' | 'ru'): void {
    this.translate.use(lang);

    this.router.navigateByUrl(this.document.location.pathname.replace(/\/(ru|ua)\//,  lang === 'ru' ? '/ru/' : '/ua/'));

  }
}
