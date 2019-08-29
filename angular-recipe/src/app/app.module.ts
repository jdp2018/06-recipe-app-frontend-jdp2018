import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { CategoriesComponent } from './categories/categories.component';
import { VegetarianComponent } from './vegetarian/vegetarian.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { CategoriesFilterPipe } from './categories/categories-filter.pipe';
import { FormsModule } from '@angular/forms';
 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CategoriesComponent,
    routingComponents,
    VegetarianComponent,
    RecipeDetailComponent,
    CategoriesFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
