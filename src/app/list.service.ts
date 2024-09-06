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
  private products: Product[] = [
    { id: 1, name: 'Product 1', price: 19.99, description: 'This is product 1' },
    { id: 2, name: 'Product 2', price: 29.99, description: 'This is product 2' },
    { id: 3, name: 'Product 3', price: 39.99, description: 'This is product 3' },
    { id: 4, name: 'Product 4', price: 49.99, description: 'This is product 4' },
    { id: 5, name: 'Product 5', price: 59.99, description: 'This is product 5' },
    { id: 6, name: 'Product 6', price: 69.99, description: 'This is product 6' },
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }
}