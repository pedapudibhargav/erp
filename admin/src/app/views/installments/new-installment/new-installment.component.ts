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

  constructor(private location : Location, private route: ActivatedRoute, private localStorageConverter : LocalstorageConverterService, private defaultVariableService: DefaultVariablesService) { 
    this.route.params.subscribe(params => {
      console.log("Params:", params);
      this.purchaseId = params.purchaseId;
      this.getPaymentById(this.purchaseId);
      this.paymentType = this.defaultVariableService.getPaymentTypeByValue(this.purchaseObjIn.payment_type);
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
