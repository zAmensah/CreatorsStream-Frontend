import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-ds-navbar',
  templateUrl: './ds-navbar.component.html',
  styleUrls: ['./ds-navbar.component.css'],
})
export class DsNavbarComponent implements OnInit {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
    window.location.reload();
  }

  ngOnInit(): void {}
}
