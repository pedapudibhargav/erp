import { Component, OnInit } from '@angular/core';
import { LocalstorageConverterService } from 'app/services/localstorage-converter.service';

@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.component.html',
  styleUrls: ['./new-purchase.component.scss']
})
export class NewPurchaseComponent implements OnInit {
  suppliers = [];
  paymentTypes = [
    {
      name: "100% Spot Payment",
      value: "100_per_spot_payment"
    },
    {
      name: "Fixed Gold Price - Installment",
      value: "fixed_gold_price_installment"
    },
    {
      name: "Dynamic Gold Price - Installment",
      value: "dynamic_gold_price_installment"
    },
    {
      name: "Deposit",
      value: "deposit"
    }
  ];

  constructor( private localStorageConverter : LocalstorageConverterService) { }

  ngOnInit() {
    this.getAllSuppliers();
  }

  getAllSuppliers(){
      if(localStorage.getItem("suppliers") !== null){
        this.suppliers = this.localStorageConverter.getJsonObjectByKey("suppliers");
      }
      else{
        console.log("Empty:suppliers");
      }
    }
}
