import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { VegetarianComponent } from './vegetarian/vegetarian.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipe', component: RecipeListComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'vegetarian', component: VegetarianComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  RecipeListComponent,
  CategoriesComponent,
  VegetarianComponent
];
