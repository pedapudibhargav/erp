import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService) { }

  onMerchantLogin(formIn : NgForm){
    console.log(formIn);
    if(!this.authService.authMerchantLogin(formIn.value.username,formIn.value.password)){
      alert("Invalid Username or password " + formIn.value.username + "," + formIn.value.password);
    }
    else{
      console.log("Login Success:" + formIn.value.username + "," + formIn.value.password);
    }
  }

  ngOnInit() {
  }

}
