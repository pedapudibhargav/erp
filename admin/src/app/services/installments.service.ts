import { Injectable } from '@angular/core';
import { LocalstorageConverterService } from './localstorage-converter.service';
import { Installment } from 'app/models/installment';

@Injectable({
  providedIn: 'root'
})
export class InstallmentsService {
  
  constructor(private localstorageService: LocalstorageConverterService) { }
  
  getInstallmentsForAPurchase(purchaseId:string){
    var installMentsArray = [];
    var allinstallments = [];
    if(this.localstorageService.getJsonObjectByKey("installments") === null){
      this.localstorageService.setJsonObjectToKey("installments", []);
    }
    allinstallments = this.localstorageService.getJsonObjectByKey("installments");
    
    for(var i=0; i < allinstallments.length; i++){
      if(allinstallments[i].purchase_id == purchaseId){
        installMentsArray.push(allinstallments[i]);
      }
    }

    return installMentsArray;
  }

  addNewInstallment(installment:Installment){
    var currentInstallments = this.localstorageService.getJsonObjectByKey("installments");
    currentInstallments.push(installment);
    this.localstorageService.setJsonObjectToKey("installments", currentInstallments);
  }
}
