import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  merchantLoggedInFlag : boolean = false;
  customerLoggedInFlag: boolean = false;
  constructor(private router : Router) { }

  authMerchantLogin(username:string, password: string){
    console.log("authMerchant service:" + username + "," +password);
    if(username == "admin" && password == "pass")
    {
      this.merchantLoggedInFlag = true;
      this.router.navigate(['/mer-dashboard']);
      return this.merchantLoggedInFlag;
    }
    this.merchantLoggedInFlag = false;
    return this.merchantLoggedInFlag;
  }

  sessionLogout(){
    if(this.merchantLoggedInFlag)
    {
      this.merchantLoggedInFlag = false;
      console.log("Merchant logged out");
      return this.merchantLoggedInFlag;
    }else if(this.customerLoggedInFlag){
      this.customerLoggedInFlag = false;
      return this.customerLoggedInFlag;
    }
    else{
      console.error("No session found");
    }
  }

  authCustomerLogin(username:string, password: string){
    if(username == "adminc" && password == "passc")
    {
      return true;
    }
    return false;
  }

  isMerchantLoggedIn(){
    return this.merchantLoggedInFlag;
  }

  isCustomerLoggedIn(){
    return this.customerLoggedInFlag;
  }

  isMerchantOrCustomerLoggedIn (){
    if(this.merchantLoggedInFlag || this.customerLoggedInFlag)
      return true;
    return false;
  }

}
