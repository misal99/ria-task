import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;

  constructor(private router: Router) {
    this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): IUser {
    return this.currentUserSubject.value;
  }

  login(user: IUser) {
    if (user.userName === 'admin@gmail.com' && user.password === 'admin') {
      localStorage.setItem('currentUser', JSON.stringify({ userName: user.userName, password: user.password}));
      this.currentUserSubject.next(user);
      this.router.navigate(['countries']);
    } else {
      throw 'error';
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}

export interface IUser {
  userName: string;
  password: string;
}
