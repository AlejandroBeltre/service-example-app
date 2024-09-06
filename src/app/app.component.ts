import { Component } from '@angular/core';
import { ListDisplayComponent } from './list-display/list-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListDisplayComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My List App';
}