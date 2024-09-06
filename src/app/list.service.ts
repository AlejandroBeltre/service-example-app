import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private products: Product[] = [];

  constructor() {
    const n: number = 8; // Number of elements can be managed dynamiclly
    for (let i = 1; i <= n; i++) {
      const randomPrice = (Math.random() * (200 - 10) + 10).toFixed(2); //Random generating of the pricing
      this.products.push({
        id: i, //Set the id for the product based on iteration
        name: `Product ${i}`, // SImple name for the product
        price: parseFloat(randomPrice) , //Price of the product
        description: `This is product ${i}` // Short description of the product
      });
    }
  }

  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }
}
