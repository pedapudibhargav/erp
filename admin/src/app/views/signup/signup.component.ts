import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onCustomerSignUp(form : NgForm){
    console.log("User info");
    if(form.value.password != form.value.retypePassword){
      alert("Password and retype password did not match");
      return;
    }
    this.authService.createNewCustomerUser(form.value.email, form.value.password);
    console.log(form);
  }

}
