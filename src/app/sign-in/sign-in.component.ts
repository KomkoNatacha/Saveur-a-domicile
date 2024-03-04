import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit{
  signInForm! : FormGroup;
  hide: boolean = true;

  constructor() {
  }
ngOnInit() {
    this.signInForm = new FormGroup(
      {
        email : new FormControl ('',[Validators.required,Validators.email]),
        password : new FormControl('',[Validators.required])
      }
    );
}

onSignIn(){

}
}
