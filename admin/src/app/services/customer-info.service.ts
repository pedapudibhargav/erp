import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import * as firestore from 'firebase/firestore';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerInfoService {
  private db = firebase.firestore();

  constructor() { 
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    this.db.settings(settings);
  }

  getCustomersList(){
   console.log("from service");
   return this.db.collection("customer");
  }

  createNewCustomer(formIn : NgForm){
    console.log("Form In");
    console.log(formIn);

    this.db.collection("customer").doc(formIn.form.value.email).set(formIn.form.value)
    .then(function() {
        console.log("Document successfully written!");
        document.getElementById("closeCreateNewUserModal").click();
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }
}
