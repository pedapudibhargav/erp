import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from 'app/models/api-url';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  constructor(private http: HttpClient, private apiDef: ApiUrl) { 
  }

  getPurchases(){
    console.log("Get Purchases list");
    return this.http.get(this.apiDef.api + '/purchases');
   }

   createPurchase(formIn : NgForm){
    let postUrl = this.apiDef.api + '/purchases';
    return this.http.post(postUrl,formIn.form.value);   
   }

}
