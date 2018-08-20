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
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.merchantLoggedInFlag = true;
        console.log("found user");
      }
      else{
        console.log("User not found");
      }
    });
  }
  authMerchantLogin(username:string, password: string){
        return firebase.auth().signInWithEmailAndPassword(username, password);
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
