import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { VegetarianComponent } from './vegetarian/vegetarian.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' }
];

const reciperoutes: Routes = [
  { path: 'categories/:id', component: RecipeDetailComponent},
  { path: 'categories', component: CategoriesComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(reciperoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  RecipeListComponent,
  CategoriesComponent,
  VegetarianComponent
];
