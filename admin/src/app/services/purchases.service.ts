import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from 'app/models/api-url';
import { NgForm } from '@angular/forms';
import { Purchase } from 'app/models/purchase';
import { LocalstorageConverterService } from './localstorage-converter.service';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  constructor(private http: HttpClient, private apiDef: ApiUrl, private localSotrageApi: LocalstorageConverterService) { 
  }

  getPurchases(){
    console.log("Get Purchases list");
    return this.http.get(this.apiDef.api + '/purchases');
   }

   createPurchase(formIn : NgForm){
    let postUrl = this.apiDef.api + '/purchases';
    return this.http.post(postUrl,formIn.form.value);   
   }

   updatePurchase(purchaeObjIn : Purchase){
    var allPurchases = this.localSotrageApi.getJsonObjectByKey("purchases");
    var newArray = [];
    for(var i=0; i < allPurchases.length; i++){
      if(purchaeObjIn.id == allPurchases[i].id){
        newArray.push(purchaeObjIn);
        continue;
      }
      newArray.push(allPurchases[i]);
    }
    this.localSotrageApi.setJsonObjectToKey("purchases", newArray);
   }

   getPurchaseById(idIn:string){
    var allPurchases = this.localSotrageApi.getJsonObjectByKey("purchases");
    for(var i=0; i < allPurchases.length; i++){
      if(allPurchases[i].id == idIn){
        return allPurchases[i];
      }
    }
    return {};
   }

   getPurchaseUnitsById(idIn:string){
     var productModelsOfPurchase = this.getPurchaseById(idIn).prducts_list;
     var productUnitsOfPurchase = [];
      for(var i=0; i < productModelsOfPurchase.length; i++ ){
        for(var j=0; j < productModelsOfPurchase[i].units.length ; j++){
          productUnitsOfPurchase.push(productModelsOfPurchase[i].units[j]);
        }
      }
      return productUnitsOfPurchase;
   }

   getPurchaseWeightTotal(idIn:string){
     var totalWeight = 0;
     var purchaseObj = this.getPurchaseById(idIn);
     var unitsArray = this.getPurchaseUnitsById(idIn);
     for(var i =0; i < unitsArray.length; i++){
      totalWeight  = totalWeight + unitsArray[i].weight;
     }
     return totalWeight;
   }
}
