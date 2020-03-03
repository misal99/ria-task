import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})

export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private service: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (this.service.currentUserValue) {
      this.router.navigate(['']);
    }
    this.form = this.formBuilder.group({
      userName: '',
      password: '',
    });
  }

  login() {
    try {
      this.service.login(this.form.value);
    } catch (error) {
      alert('Wrong username or password');
    }
  }
}
