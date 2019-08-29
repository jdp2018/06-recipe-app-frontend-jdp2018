import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  private meal: meal;
  constructor(
    private route: ActivatedRoute,
    private service: DataService
  ) { }

  ngOnInit() {
    this.getRecipe();
  }

  getRecipe(): void {
    const recipeId = this.route.snapshot.paramMap.get('id');
    this.service.getRecipe(recipeId)
      .subscribe((response: any) => this.meal = response.meals[0]);
  }
}
