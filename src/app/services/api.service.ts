// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import data from '../../assets/myProducts.json';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  
  getProduct() {
    return new Observable<any>(observe => {
      observe.next(data)
    })
    // return this.http.get("https://fakestoreapi.com/products").pipe(map((res: any) => {
    //   return data;
    // }))
  }
}
