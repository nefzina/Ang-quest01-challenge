import { Component } from '@angular/core';
import { SignupForm } from './signupForm';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

signupform: SignupForm = new SignupForm("", "", "")
constructor(){}

  onSubmit(): void {
    console.log(this.signupform)
  }

}
