import { Component, OnInit } from '@angular/core';
import { IUser } from '../data-types';
import { AuthenticationService } from '../services/authentication-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: boolean = false;
  public user!: IUser;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(user => {
      if(user) {
        this.isLoggedIn = true;
        this.user = user;
      }
      else this.isLoggedIn = false;
    })
  }


}
