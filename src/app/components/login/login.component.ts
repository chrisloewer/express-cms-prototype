import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMsg: string;
  generalMsg: string;
  loading = false;
  loggedIn = false;
  returnUrl: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    if (AuthService.isAuthenticated()) {
      this.loggedIn = true;
      this.generalMsg = 'User already authenticated.';
    }
  }

  login(): void {
    this.loading = true;
    this.errorMsg = null;
    this.authService.login(this.username, this.password)
      .subscribe(
        (user) => {
          AuthService.storeLocalUser(user);
          this.generalMsg = 'Login successful';
          this.loggedIn = true;
          this.loading = false;
          this.router.navigateByUrl(this.returnUrl);
        },
        (err) => {
          console.warn('Error', err);
          this.errorMsg = 'Incorrect login credentials';
          this.loading = false;
        }
      );
  }

}
