import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from "../data.service";
import { TokenService } from "../token.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignUpComponent implements OnInit {
  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null,
    idMeal: null,
  };
  public error: any = {};
  constructor(
    private signUpApi: DataService,
    private Token: TokenService,
    private router: Router
  ) {}

  handleError(error) {
    this.error = error.error.errors;
    console.log(error);
  }

  onSubmit() {
    this.signUpApi.signUp(this.form).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl("/saved-recipes");
  }

  ngOnInit() {}
}
