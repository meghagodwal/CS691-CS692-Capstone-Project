import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  userData: User;
  constructor(public authService: AuthService) {
    authService.userData.subscribe((res) => {
      console.log(res);
      this.userData = res;
    });
  }

  ngOnInit(): void {
  }

}
