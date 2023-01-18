import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import dataUa from '../../assets/i18n/myProdUa.json';
import dataRu from '../../assets/i18n/myProdRu.json';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  botUrl = 'https://binancebot.vps.webdock.cloud/?'
  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: any
  ) { }

  getProduct(l: string = 'ua') {
    const lang = new RegExp('\/ru\/').test(this.document.location.href) ? 'ru' : 'ua';

    return new Observable<any>(observe => {
      observe.next(lang === 'ru' ? dataRu : dataUa)
    })

  }
  sendBot(name: string, phone: string, comment: string) {
    return this.http.get(`${this.botUrl}name=${name}&phone=${phone}&comment=${comment}`).subscribe(d => true);
  }

}
