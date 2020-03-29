import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {User} from '../../models/user';
import {DashboardService} from '../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recent: any;
  userData: User;
  categories: any;
  constructor(public authService: AuthService,
              public dashboardService: DashboardService) {
    authService.userData.subscribe((res) => {
      console.log(res);
      this.userData = res;
    });
  }

  ngOnInit() {
    this.getRecentViews();
    this.getCategories();
  }

  getRecentViews() {
    this.dashboardService.getRecentViews().subscribe(res => {
      console.log(res); this.recent = res; });
  }

  getCategories() {
    this.dashboardService.getCategories().subscribe(res => {
      this.categories = res;
    });

  }

}
