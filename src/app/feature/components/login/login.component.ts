import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  
  loginForm: FormGroup;

  usernameControl: FormControl;
  passwordControl: FormControl;

  invalidLogin = false;

  errorMessage= 'Invalid Credentials';

  constructor(
    private router: Router, private userService: HttpService) { }

  ngOnInit(): void {

    if(this.userService.isAuth()){
      this.router.navigate([""]);
    }

    this.usernameControl =  new FormControl('', [Validators.required, Validators.email]);
    this.passwordControl =  new FormControl('', [Validators.required]);

    this.loginForm = new FormGroup({
      username: this.usernameControl,
      password: this.passwordControl
    });

    
  }

  handleLogin(){
    const {username, password} = this.loginForm.value;

    const proceed = this.userService.authenticate(username, password);
        if(proceed){
          this.router.navigate(['']);
          this.invalidLogin = false;
        } else {
          this.errorMessage= 'Invalid Credentials';
          this.invalidLogin = true
        }
     
      

    
  }

  getControlValidationClasses(control: FormControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }
}
