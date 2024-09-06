import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  private listSubject = new BehaviorSubject<string[]>(this.items);

  constructor() { }

  getList() {
    return this.listSubject.asObservable();
  }

  addItem(item: string) {
    this.items.push(item);
    this.listSubject.next(this.items);
  }
}