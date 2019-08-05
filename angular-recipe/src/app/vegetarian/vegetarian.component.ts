import { Component, OnInit } from '@angular/core';
import {  DataService } from '../data.service';

@Component({
  selector: 'app-vegetarian',
  templateUrl: './vegetarian.component.html',
  styleUrls: ['./vegetarian.component.scss']
})
export class VegetarianComponent implements OnInit {

  meals: meal[];
  selectedMeals: meals;
  id: '';
  searchTerm: string;

  onSelect(meals: meals): void {
    this.selectedMeals = meals;
    console.log(this.selectedMeals);
  }

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getRecipe().subscribe((resp: meals) => {
      this.meals = resp.meals;
    });
  }
}
