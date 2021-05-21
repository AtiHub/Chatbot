import { Component, OnInit } from '@angular/core';
import { IUser } from '../data-types';
import { AuthenticationService } from '../services/authentication-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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

  logout(){
    this.authenticationService.logout();
  }

}
