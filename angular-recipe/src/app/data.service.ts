import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/latest.php';
  constructor(private http: HttpClient) { }
  private randomUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  getRecipe(): Observable<object> {
    return this.http.get(this.apiUrl);
  }
  getRandom(): Observable<object> {
    return this.http.get(this.randomUrl);
  }
}

