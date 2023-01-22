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
//   onActivate(event: any) {
//     // window.scroll(0,0);
 
//     window.scroll({ 
//             top: 0, 
//             left: 0, 
//             behavior: 'smooth' 
//      });
 
//      //or document.body.scrollTop = 0;
//      //or document.querySelector('body').scrollTo(0,0)
     
//  }
onActivate(event: any) {
  let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 16);
}

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res => {
      this.totalItemNumber = res.length;
    })
  }
  setLang(lang: 'ua' | 'ru'): void {
    this.translate.use(lang);

    this.router.navigateByUrl(this.document.location.pathname.replace(/\/(ru|ua)\//,  this.document.location.href.includes('/ua/') ? '/ru/' : '/ua/'));

  }
}
