import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListService, Product } from '../list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private listService: ListService) {
    this.products$ = this.listService.getProducts();
  }

  ngOnInit() {
    this.products$ = this.listService.getProducts();
  }
}