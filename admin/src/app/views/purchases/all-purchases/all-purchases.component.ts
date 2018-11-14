import { Component, OnInit } from '@angular/core';
import { PurchasesService } from 'app/services/purchases.service';
import { Purchase } from 'app/models/purchase';
import { LocalstorageConverterService } from 'app/services/localstorage-converter.service';

@Component({
  selector: 'app-all-purchases',
  templateUrl: './all-purchases.component.html',
  styleUrls: ['./all-purchases.component.scss']
})
export class AllPurchasesComponent implements OnInit {

  purchases = [{
    id: "1",
    supplier_id: "S1" ,
    depreciation: "3",
    purchase_date: "",
    purchase_time: "",
    purchase_time_gold_price: "",
    total_weight: "1102",
    total_payment: "100999",
    payment_type: "100% down",
    pending_cash_balance: "2345",
    pending_weight_balance: "23",
  }];
  constructor(private purchasesService: PurchasesService, private localStorageConverter : LocalstorageConverterService) {
    this.getAllPurchases();
   }

  ngOnInit() {
  }

  getAllPurchases(){
    // this.purchasesService.getPurchases().subscribe(
    //   (data:Purchase[]) => {
    //     this.purchases = data;
    //     console.log("We got", data);
    //   });
    if(localStorage.getItem("purchases") !== null){
      this.purchases = this.localStorageConverter.getJsonObjectByKey("purchases");
    }
    else{
      console.log("Empty:purchases");
    }

  }

}
