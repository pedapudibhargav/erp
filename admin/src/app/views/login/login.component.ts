import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router) { }

  
  onMerchantLogin(formIn : NgForm){
    console.log(formIn);
    this.authService.authMerchantLogin(formIn.value.username,formIn.value.password)
        .then(resp => {
                this.authService.merchantLoggedInFlag = true;
                console.log("Login Success:" + formIn.value.username + "," + formIn.value.password);
                this.router.navigate(['/mer-dashboard']);
        })
        .catch(err => {
            alert("Invalid Username or password " + formIn.value.username + "," + formIn.value.password);
            this.authService.merchantLoggedInFlag = false;
        });
  }

  ngOnInit() {
  }

}
