import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LocalstorageConverterService } from 'app/services/localstorage-converter.service';
import { Purchase } from 'app/models/purchase';
import { DefaultVariablesService } from 'app/services/default-variables.service';
import { InstallmentsService } from 'app/services/installments.service';
import { NgForm } from '@angular/forms';
import { Installment } from 'app/models/installment';
import { PurchasesService } from 'app/services/purchases.service';

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
  constructor(private location : Location, private route: ActivatedRoute, private localStorageConverter : LocalstorageConverterService, private defaultVariableService: DefaultVariablesService, private installmentService: InstallmentsService, private purchaseService: PurchasesService) { 
    this.route.params.subscribe(params => {
      console.log("Params:", params);
      this.purchaseId = params.purchaseId;
      this.getPaymentById(this.purchaseId);
      this.paymentType = this.defaultVariableService.getPaymentTypeByValue(this.purchaseObjIn.payment_type);
      this.installmentsOfPurchase = this.installmentService.getInstallmentsForAPurchase(this.purchaseId) ;
      this.productModelsOfPurchase = this.purchaseObjIn.prducts_list;
      this.productUnitsOfPurchase = [];
      for(var i=0; i < this.productModelsOfPurchase.length; i++ ){
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

  addNewPayment(f:NgForm){
    if(f.form.valid){
      if(localStorage.getItem("installments") === null){
        this.localStorageConverter.setJsonObjectToKey("installments",[]);
      }
      console.log("FormValue:", f.form.value);
      var paymentAmt = f.form.value.payment_amount;
      var gold_price_during_purchase = f.form.value.gold_price_during_payment;
      var newPurchaseId = this.localStorageConverter.getJsonObjectByKey("installments").length;
      var newInstallment = new Installment("ins"+newPurchaseId, this.purchaseId,  paymentAmt, gold_price_during_purchase);
      console.log("Installment:",newInstallment );
      this.installmentService.addNewInstallment(newInstallment);
      this.installmentsOfPurchase = this.installmentService.getInstallmentsForAPurchase(this.purchaseId) ;
      this.updateBalaceForPurchase();
    }
    else{
      console.error("Invalid form");
      console.log(f.form.valid);
      alert("Please fill in the form");
    }
  }  

  updateBalaceForPurchase(){
    var totalFromPayments = 0;
    var totalOfPurchase = 0;
    var paymentObj = this.purchaseObjIn;
    var totalWeightOfPurchase =  this.purchaseService.getPurchaseWeightTotal(paymentObj.id);
    var wastageCost= ((totalWeightOfPurchase/92) * Number(paymentObj.wastage)).toFixed(2);
    console.log("Inside Update Balance:" + paymentObj.payment_type);
    if(totalOfPurchase < 1){
      totalOfPurchase = this.purchaseService.getPurchaseTotal(paymentObj.id);
    }
    for(var i=0; i < this.installmentsOfPurchase.length; i++){
      totalFromPayments = Number(totalFromPayments) + Number(this.installmentsOfPurchase[i].payment_amount);
    }

    paymentObj.pending_cash_balance = Number((totalOfPurchase - totalFromPayments).toFixed(2));
    paymentObj.total_cash = totalOfPurchase;
    paymentObj.total_weight = totalWeightOfPurchase;
    paymentObj.paid_cash = totalFromPayments;
    this.purchaseService.updatePurchase(paymentObj);
  }
}
