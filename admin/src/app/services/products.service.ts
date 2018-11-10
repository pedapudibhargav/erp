import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from 'app/models/api-url';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private apiDef: ApiUrl) { 
  }

  getProductsList(){
    console.log("Get products list");
    return this.http.get(this.apiDef.api + '/products');
   }

   createProduct(formIn : NgForm){
    let postUrl = this.apiDef.api + '/products';
    return this.http.post(postUrl,formIn.form.value);   
   }
}
