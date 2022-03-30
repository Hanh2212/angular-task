import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authName?: string = '';
  showIcon?: boolean;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.$showName.subscribe({
      next: (data) => this.showIcon = data,
      error: (err) => console.log(err)
    })
    if (this.authService.isAuthenticated()) {
      this.showIcon = true;
      this.authName = this.authService.credentials?.username;
    }
  }

  logOut(): void {
    this.authService.logout();
    this.showIcon = false;
  }

}
