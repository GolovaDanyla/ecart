import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const OREDR: string = 'ORDER';
const localStorage: any = {
  getItem: (id: string) => {},
  setItem: (id: string, data: any) => {}
};

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
  cartDataList: any = [];
  productList = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {
    this.cartDataList = this.sGet(OREDR) || [];
    this.productList.next(this.cartDataList);
  }
  sGet(id: string) {
    return JSON.parse(localStorage?.getItem(id) || 'null');
  }
  sSet(id: string, data: any){
    localStorage?.setItem(id, JSON.stringify(data));
  }
  getProductData() {
    return this.productList.asObservable();
  }
  setProduct(product: any) {
    this.cartDataList.push(...product);
    this.sSet(OREDR, this.cartDataList);
    this.productList.next(product);
  }
  addToCart(product: any) {
    this.cartDataList.push(product);
    this.sSet(OREDR, this.cartDataList);

    this.productList.next(this.cartDataList);
    this.getTotalAmount();
    console.log(this.cartDataList)

  }
  getTotalAmount(): number {
    let grandTotal = 0;
    this.cartDataList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartData(product: any) {
    this.cartDataList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartDataList.splice(index, 1)
      }
    });
    this.sSet(OREDR, this.cartDataList);
    this.productList.next(this.cartDataList);
  }
  removeAllCart(){
    this.cartDataList = [];
    this.sSet(OREDR, this.cartDataList)
    this.productList.next(this.cartDataList)
  }
}
