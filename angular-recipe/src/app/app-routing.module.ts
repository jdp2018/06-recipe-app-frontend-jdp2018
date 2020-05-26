import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { CategoriesComponent } from "./categories/categories.component";
import { VegetarianComponent } from "./vegetarian/vegetarian.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./signup/signup.component";
import { ProfileComponent } from "./profile/profile.component";
import { RequestResetComponent } from "./password/request-reset/request-reset.component";
import { ResponseResetComponent } from "./password/response-reset/response-reset.component";
import { BeforeLoginService } from "./before-login.service";
import { AfterLoginService } from "./after-login.service";
import { SavedRecipesComponent } from "./saved-recipes/saved-recipes.component";

const routes: Routes = [
  { path: "", redirectTo: "/categories", pathMatch: "full" },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path: "signup",
    component: SignUpComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AfterLoginService],
  },
  {
    path: "request-password-reset",
    component: RequestResetComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path: "response-password-reset",
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService],
  },
];

const reciperoutes: Routes = [
  { path: "categories/:id", component: RecipeDetailComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "home", component: HomeComponent },
  { path: "signup", component: SignUpComponent },
  { path: "recipe-favories", component: ProfileComponent },
  { path: "response-reset", component: ResponseResetComponent },
  { path: "request-reset", component: RequestResetComponent },
  { path: "saved-recipes", component: SavedRecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(reciperoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  RecipeListComponent,
  CategoriesComponent,
  VegetarianComponent,
  LoginComponent,
  SignUpComponent,
  ProfileComponent,
  RequestResetComponent,
  ResponseResetComponent,
];
