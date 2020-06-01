import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { TokenService } from "../token.service";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent implements OnInit {
  meals: meal[];
  selectedMeals: meals;
  id: "";
  searchTerm: string;
  public input = {
    email: null,
    password: null,
    idMeal: null,
  };
  public loggedIn: boolean;

  onSelect(meals: meals): void {
    this.selectedMeals = meals;
  }
  onSaveRecipes(idMeal: number) {
    this.savedRecipes
      .saveRecipe({ token: this.token.get(), idMeal })
      .subscribe((data) => this.handleResponse());
  }
  handleResponse() {
    this.input.idMeal = null;
  }

  constructor(
    private data: DataService,
    private savedRecipes: DataService,
    private token: TokenService,
    private Auth: AuthService
  ) {}

  ngOnInit() {
    this.Auth.authStatus.subscribe((value) => (this.loggedIn = value));
    this.meals = [];
    for (let i = 0; i < 10; i++) {
      this.data.getRandom().subscribe((resp: meals) => {
        this.meals.push(resp.meals[0]);
      });
    }
  }
}
