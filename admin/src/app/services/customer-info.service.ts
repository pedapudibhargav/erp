import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import * as firestore from 'firebase/firestore';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from 'app/models/api-url';

@Injectable({
  providedIn: 'root'
})
export class CustomerInfoService {
  private db = firebase.firestore();

  constructor(private http: HttpClient, private apiDef : ApiUrl) { 
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    this.db.settings(settings);
  }

  getCustomersList(){
   console.log("from service");

   return this.http.get(this.apiDef.api + '/customer');
  }

  createNewCustomer(formIn : NgForm){
    console.log("Form In", formIn);
    console.log("Form Data:",formIn.form.value);
    let postUrl = this.apiDef.api + '/customer';
    return this.http.post(postUrl,formIn.form.value);    
    // this.db.collection("customer").doc(formIn.form.value.email).set(formIn.form.value)
    // .then(function() {
    //     console.log("Document successfully written!");
    //     document.getElementById("closeCreateNewUserModal").click();
    // })
    // .catch(function(error) {
    //     console.error("Error writing document: ", error);
    // });
  }
}
