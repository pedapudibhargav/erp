import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-merch-customer-panel',
  templateUrl: './merch-customer-panel.component.html',
  styleUrls: ['./merch-customer-panel.component.scss']
})
export class MerchCustomerPanelComponent implements OnInit {

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
