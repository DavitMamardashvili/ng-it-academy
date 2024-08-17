import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
imports: [NgFor]

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']  // Correct spelling
})
export class CompanyListComponent {
  logoArray: number[] = Array(9).fill(0);
}
