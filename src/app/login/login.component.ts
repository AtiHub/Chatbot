import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  public wrong: boolean = false;
  public error: boolean = false;

  public returnUrl: string = '/';

  constructor(private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
  }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login(){
    if (this.loginForm.invalid) {
      return;
    }
    this.authenticationService.login(this.email?.value, this.password?.value).pipe(first()).subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      err => {
        if(err.status == 400) this.wrong = true;
        else this.error = true;
      }
    );
  }

}
