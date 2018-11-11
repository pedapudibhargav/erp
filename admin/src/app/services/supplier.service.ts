import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from 'app/models/api-url';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient, private apiDef: ApiUrl) { 
  }

  getAllSuppliers(){
    return this.http.get(this.apiDef.api + '/suppliers');
   }

   createSupplier(formIn : NgForm){
    let postUrl = this.apiDef.api + '/suppliers';
    return this.http.post(postUrl,formIn.form.value);   
   }
}
