import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  message: string ='';
  isAuthenticate: boolean = false;


  constructor(private router: Router) {
  }
  ngOnInit() {
    this.isAuthenticate = false;
  }

  login() {
    console.log('hello');
  }

  onSubmit(myForm: NgForm) {
    this.isAuthenticate = true;
    console.log('form value', myForm.value);
    const user = {
      login: "admin",
      password: "password"
    }
    if (myForm.value.login === user.login && myForm.value.password === user.password) {
      this.router.navigate(['home']);
    } else {
      this.message ='login ou mot de passe incorrect';
      myForm.onReset();
    }
  }
}
