import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  /*
  categories: category[];
  selectedCategory: category;
  */
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
    this.data.getRecipes().subscribe((resp: meals) => {
      this.meals = resp.meals;
    });
  }
}
