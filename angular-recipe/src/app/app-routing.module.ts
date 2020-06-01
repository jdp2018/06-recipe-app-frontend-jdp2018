import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoriesComponent } from "./categories/categories.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./signup/signup.component";
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
  { path: "signup", component: SignUpComponent },
  { path: "response-reset", component: ResponseResetComponent },
  { path: "request-reset", component: RequestResetComponent },
  {
    path: "saved-recipes",
    component: SavedRecipesComponent,
    canActivate: [AfterLoginService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(reciperoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  CategoriesComponent,
  LoginComponent,
  SignUpComponent,
  RequestResetComponent,
  ResponseResetComponent,
];
