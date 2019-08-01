import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private dataService: DataService
  ) {}
  }

