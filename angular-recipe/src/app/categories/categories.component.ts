import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  /*
  categories: category[];
  selectedCategory: category;
  */
  meals: meal[];
  selectedMeals: meals;
  id: "";
  searchTerm: string;

  onSelect(meals: meals): void {
    this.selectedMeals = meals;
    console.log(this.selectedMeals);
  }

  constructor(private data: DataService) {}

  ngOnInit() {
    this.meals = [];
    for (let i = 0; i < 10; i++) {
      this.data.getRandom().subscribe((resp: meals) => {
        console.log(resp);
        this.meals.push(resp.meals[0]);
      });
    }
  }
}
