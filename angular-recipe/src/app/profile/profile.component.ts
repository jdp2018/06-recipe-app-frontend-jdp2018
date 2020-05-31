import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  meals: meal[];
  selectedMeals: meals;
  constructor(private data: DataService) {}

  ngOnInit() {}
}
