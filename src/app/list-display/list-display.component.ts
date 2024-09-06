import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListService } from '../list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent implements OnInit {
  items$: Observable<string[]>;

  constructor(private listService: ListService) {
    this.items$ = this.listService.getList();
  }

  ngOnInit() {
    this.items$ = this.listService.getList();
  }
}