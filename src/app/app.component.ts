import { Component, OnInit } from '@angular/core';
import { IUser, AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rai-task';
  currentUser: IUser;

  constructor(
      private authenticationService: AuthenticationService,
      private router: Router,
  ) {
      this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
  }

  ngOnInit() {
    if (!this.authenticationService.currentUserValue) {
      this.router.navigate(['login']);
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
