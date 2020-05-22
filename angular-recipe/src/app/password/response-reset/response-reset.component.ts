import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-response-reset",
  templateUrl: "./response-reset.component.html",
  styleUrls: ["./response-reset.component.sass"],
})
export class ResponseResetComponent implements OnInit {
  public error = [];
  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null,
  };

  constructor(
    private route: ActivatedRoute,
    private ResetPassword: DataService,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => {
      this.form.resetToken = params["token"];
    });
  }

  onSubmit() {
    this.ResetPassword.changePassword(this.form).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.router.navigateByUrl("/login");
  }
  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {}
}
