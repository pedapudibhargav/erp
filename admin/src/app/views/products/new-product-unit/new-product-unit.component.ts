import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalstorageConverterService } from 'app/services/localstorage-converter.service';

@Component({
  selector: 'app-new-product-unit',
  templateUrl: './new-product-unit.component.html',
  styleUrls: ['./new-product-unit.component.scss']
})
export class NewProductUnitComponent implements OnInit {

  constructor(private localStorageConverter : LocalstorageConverterService) { }

  ngOnInit() {
  }

  onProductUnitCreation(f:NgForm){
    if(f.form.valid){
      console.log("FormIn:", f.form.value);
      var newProductUnit = f.form.value;
      if(localStorage.getItem("product_units") === null){
        this.localStorageConverter.setJsonObjectToKey("product_units",[]);
      }
      let productUnitsFromStorage: [any] =  this.localStorageConverter.getJsonObjectByKey("product_units");
      newProductUnit["id"] = "PUNIT"+productUnitsFromStorage.length;
      newProductUnit["status"] = "in_stock";
      newProductUnit["selling_price"] = 0;
      newProductUnit["purchase_price"] = 0;
      newProductUnit["gross_profit"] = 0;
      productUnitsFromStorage.push(newProductUnit);
      console.log("FinalUnitsList:",productUnitsFromStorage);
      this.localStorageConverter.setJsonObjectToKey("product_units",productUnitsFromStorage);
    }
    else{
      console.error("Invalid form");
      console.log(f.form.valid);
      alert("Please fill in the form");
    }  
  }

}
