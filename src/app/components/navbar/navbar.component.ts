import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  isLoggedIn: boolean;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((res) => {
      console.log(res);
      this.isLoggedIn = res;
    });
    console.log(this.isLoggedIn);
  }

}
