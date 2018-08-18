import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  merchantLoggedInFlag : boolean = false;
  customerLoggedInFlag: boolean = false;

  constructor(private router : Router) { }

  ngOnInit(){

  }
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
      this.merchantLoggedInFlag = !this.merchantLoggedInFlag;
      console.log("Merchant logged out");
      return this.merchantLoggedInFlag;
  }

  authCustomerLogin(username:string, password: string){
    firebase.auth().signInWithEmailAndPassword(username,password)
    .then(
      res =>{
        this.customerLoggedInFlag = true;
      }
    )
    .catch(
      err =>{
        console.log(err);
      }
    )

  }

  customerSessionLogout(){
    this.customerLoggedInFlag = !this.customerLoggedInFlag;
    return this.customerLoggedInFlag;
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

  createNewCustomerUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(
        res => {
          alert("User created");
        }
      )
      .catch(
        error => console.log(error)
      );
  }
}
