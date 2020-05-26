import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/data.service";
import { SnotifyService } from "ng-snotify";

@Component({
  selector: "app-request-reset",
  templateUrl: "./request-reset.component.html",
  styleUrls: ["./request-reset.component.sass"],
})
export class RequestResetComponent implements OnInit {
  public form = {
    email: null,
  };

  constructor(
    private ResetPassword: DataService,
    private notify: SnotifyService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.ResetPassword.resetPassword(this.form).subscribe(
      (data) => this.handleResponse(),
      (error) => this.notify.error(error.error.error)
    );
  }

  handleResponse() {
    this.form.email = null;
  }
}
