import { Component, OnInit } from '@angular/core';
import { PurchasesService } from 'app/services/purchases.service';
import { Purchase } from 'app/models/purchase';

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
    payment_type: "100% spot payment",
    last_date_of_payement: "last date of payment",
    total_weight: "1000grams",
    total: "200000",
    pending_balance: "1000"
  }];
  constructor(private purchasesService: PurchasesService) { }

  ngOnInit() {
  }

  getAllPurchases(){
    this.purchasesService.getPurchases().subscribe(
      (data:Purchase[]) => {
        this.purchases = data;
        console.log("We got", data);
      });
  }

}
