import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import data from '../../assets/i18n/myProdUa.json';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  botUrl = 'https://binancebot.vps.webdock.cloud/?'
  constructor(private http: HttpClient) { }

  getProduct() {
    return new Observable<any>(observe => {
      observe.next(data)
    })

  }
  sendBot(name: string, phone: string, comment: string) {
    return this.http.get(`${this.botUrl}name=${name}&phone=${phone}&comment=${comment}`).subscribe(d => true);
  }

}
