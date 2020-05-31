import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private apiUrl = "https://www.themealdb.com/api/json/v1/1";
  constructor(private http: HttpClient) {}
  private randomUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  private baseUrl = "http://localhost:8000/api";

  getRecipe(id: string): Observable<object> {
    return this.http.get(`${this.apiUrl}/lookup.php?i=${id}`);
  }

  getRandom(): Observable<object> {
    return this.http.get(this.randomUrl);
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  signUp(data) {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }

  resetPassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data);
  }
  changePassword(data) {
    return this.http.post(`${this.baseUrl}/convertPassword`, data);
  }
  saveRecipe(data) {
    return this.http.post(`${this.baseUrl}/recipe`, data);
  }
  showRecipes(data) {
    return this.http.post(`${this.baseUrl}/recipes`, data);
  }
  recipeDelete(data) {
    return this.http.post(`${this.baseUrl}/recipeDelete`, data);
  }
}
