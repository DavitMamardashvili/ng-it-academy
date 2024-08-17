import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-area',
  templateUrl: './filter-area.component.html',
  styleUrl: './filter-area.component.css'
})
export class FilterAreaComponent {
  courseCategories = [
    'ყველა კურსი',
    'პროგრამირება',
    'მენეჯმენტი'
  ];
}
