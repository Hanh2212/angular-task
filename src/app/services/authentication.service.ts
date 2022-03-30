import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginPayload, UserDetail } from '../model/user-detail.model';

const credentialsKey = 'credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private credential!: UserDetail | null;

  authName = new BehaviorSubject<boolean>(false);
  $showName = this.authName.asObservable();

  constructor(private router: Router, private httpClient: HttpClient ) {
    const savedCredentials = localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      this.credential = JSON.parse(savedCredentials);
    }
  }


  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  get credentials(): UserDetail | null {
    return this.credential;
  }

  signUp(payload: LoginPayload): Observable<any> {
    return this.httpClient.post<any>('/auth/signup', payload);
  }

  login(payload: LoginPayload): Observable<any> {
    return this.httpClient.post<any>('/auth/login', payload);
  }

  logout() {
    this.setCredentials();
    localStorage.clear();
    this.authName.next(false);
    this.router.navigate(['/login']);
  }

  setCredentials(credentials?: UserDetail) {
    this.credential = credentials || null;
    if (credentials) {
      localStorage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      localStorage.removeItem(credentialsKey);
      this.credential = null;
    }
  }
}
