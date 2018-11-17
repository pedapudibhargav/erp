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

  purchases = [];
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
