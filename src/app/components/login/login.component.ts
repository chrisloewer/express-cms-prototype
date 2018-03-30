import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login(): void {
    this.authService.login(this.username, this.password)
      .subscribe(
        (user) => {
          console.log(user);
          AuthService.storeLocalUser(user);
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
