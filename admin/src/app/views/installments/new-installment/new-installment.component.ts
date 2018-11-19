import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LocalstorageConverterService } from 'app/services/localstorage-converter.service';
import { Purchase } from 'app/models/purchase';
import { DefaultVariablesService } from 'app/services/default-variables.service';

@Component({
  selector: 'app-new-installment',
  templateUrl: './new-installment.component.html',
  styleUrls: ['./new-installment.component.scss']
})
export class NewInstallmentComponent implements OnInit {
  
  purchaseId = "";
  purchaseObjIn:Purchase;
  paymentType:string;
  productModelsOfPurchase:any[];
  productUnitsOfPurchase:any[];
  installmentsOfPurchase:any[];

  constructor(private location : Location, private route: ActivatedRoute, private localStorageConverter : LocalstorageConverterService, private defaultVariableService: DefaultVariablesService) { 
    this.route.params.subscribe(params => {
      console.log("Params:", params);
      this.purchaseId = params.purchaseId;
      this.getPaymentById(this.purchaseId);
      this.paymentType = this.defaultVariableService.getPaymentTypeByValue(this.purchaseObjIn.payment_type);
      this.productModelsOfPurchase = this.purchaseObjIn.prducts_list;
      this.productUnitsOfPurchase = [];
      for(var i=0; i < this.productModelsOfPurchase.length; i++ ){
        console.log("Lengths:" + this.productModelsOfPurchase[i].units.length);\
        for(var j=0; j < this.productModelsOfPurchase[i].units.length ; j++){
          this.productUnitsOfPurchase.push(this.productModelsOfPurchase[i].units[j]);
        }
      }
    });
    
  }

  ngOnInit() {
  }

  backClicked() {
    this.location.back();
  }

  getPaymentById(purchaseId: string){
    var tmpPaymentsObj = this.localStorageConverter.getJsonObjectByKey("purchases");
    for(var i =0 ; i < tmpPaymentsObj.length ; i++){
      if(tmpPaymentsObj[i].id == purchaseId){
        this.purchaseObjIn = tmpPaymentsObj[i];
      }
    }
  }
}
