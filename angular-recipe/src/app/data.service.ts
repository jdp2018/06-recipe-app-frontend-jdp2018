import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private apiUrl = "https://www.themealdb.com/api/json/v1/1";
  constructor(private http: HttpClient) {}
  private randomUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  getRecipe(id: string): Observable<object> {
    return this.http.get(`${this.apiUrl}/lookup.php?i=${id}`);
  }

  getRandom(): Observable<object> {
    return this.http.get(this.randomUrl);
  }
}

