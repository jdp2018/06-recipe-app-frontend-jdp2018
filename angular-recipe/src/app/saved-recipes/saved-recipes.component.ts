import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { TokenService } from "../token.service";

@Component({
  selector: "app-saved-recipes",
  templateUrl: "./saved-recipes.component.html",
  styleUrls: ["./saved-recipes.component.scss"],
})
export class SavedRecipesComponent implements OnInit {
  meals: meal[];
  selectedMeals: meals;
  id: "";
  searchTerm: string;
  public input = {
    email: null,
    password: null,
    idMeal: null,
  };

  onSelect(meals: meals): void {
    this.selectedMeals = meals;
  }
  onDeleteRecipes(idMeal: number) {
    this.savedRecipes
      .recipeDelete({ token: this.token.get(), idMeal })
      .subscribe((resp: any) => {
        this.meals = [];
        resp.data.map((a) => {
          this.data
            .getRecipe(a.idMeal)
            .subscribe((response: any) => this.meals.push(response.meals[0]));
        });
      });
  }
  handleResponse() {
    this.input.idMeal = null;
  }

  constructor(
    private data: DataService,
    private savedRecipes: DataService,
    private token: TokenService
  ) {}

  ngOnInit() {
    this.meals = [];
    this.data
      .showRecipes({ token: this.token.get() })
      .subscribe((resp: any) => {
        resp.data.map((a) =>
          this.data
            .getRecipe(a.idMeal)
            .subscribe((response: any) => this.meals.push(response.meals[0]))
        );
      });
  }
}
