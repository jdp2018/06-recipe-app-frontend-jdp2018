import { PipeTransform, Pipe } from "@angular/core";
import { DataService } from "../data.service";

@Pipe({
  name: "categoryFilter"
})
export class CategoriesFilterPipe implements PipeTransform {
  transform(meals: meal[], searchTerm: string): meal[] {
    console.log(searchTerm);
    console.log(meals);
    if (!meals || !searchTerm || searchTerm.length < 3) {
      return meals;
    }
    return meals.filter(meal =>
      meal.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
