import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  lang: string = 'ua';
  constructor(public translation: TranslateService, @Inject(DOCUMENT) private document: any) {
    this.lang = new RegExp('\/ru\/').test(this.document.location.href) ? 'ru' : 'ua';
  }

  ngOnInit() {
  }

}
