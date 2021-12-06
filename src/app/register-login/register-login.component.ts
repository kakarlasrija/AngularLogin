import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider,SocialAuthService} from 'angularx-social-login'

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {

  constructor(private route : Router,private authService:SocialAuthService) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  confirmPassword = new FormControl('', [Validators.required]);
  signupEmail = new FormControl('', [Validators.required, Validators.email]);
  signuppassword = new FormControl('', [Validators.required, Validators.minLength(6)]);
  // disabled = false;
  errorMessage = '';

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPwdErrorMessage(){
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
    return this.password.hasError('password') ? '' : 'minimum 6 digit password is required';
  }

  getSignUpErrorMessage(){
    if (this.signupEmail.hasError('required')) {
      return 'You must enter a value';
    }
    return this.signupEmail.hasError('email') ? 'Not a valid email' : '';
  }

  getPwdSignUpError(){
    if (this.signuppassword.hasError('required')) {
      return 'You must enter a password';
    }
    return this.signuppassword.hasError('password') ? '' : 'minimum 6 digit password is required';
  }
  
  getconfirmSignUpError(){  
    if (this.confirmPassword.hasError('required')) {
      return 'You must enter a password';
      } 
    return this.confirmPassword.hasError('password') ? '' : 'minimum 6 digit password is required';
  }

  signpwd = this.signuppassword;
  confirmpwd = this.confirmPassword;

  onSignUp(){
    console.log(this.signpwd);
    console.log(this.confirmPassword);
    if(this.signpwd.value===this.confirmPassword.value)
      {
        this.route.navigate(['/home']);
      }
      else
      {
        this.errorMessage="Password and Confirm Password not Same";
      }
    }
    signInHandler(): void{
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data)=>{
        localStorage.setItem('google-auth',JSON.stringify(data));
        // this.route.navigateByUrl('/home').then();
      })

    }
  }
  
