import { Component, OnInit } from '@angular/core';
import { LocalstorageConverterService } from 'app/services/localstorage-converter.service';
import { DefaultVariablesService } from 'app/services/default-variables.service';
import { ProductUnit } from 'app/models/product-unit';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';
import { Purchase } from 'app/models/purchase';

@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.component.html',
  styleUrls: ['./new-purchase.component.scss']
})
export class NewPurchaseComponent implements OnInit {
  suppliers = [];
  paymentTypes = [];
  metalTypes = [];
  products = [];
  transactionSingleProductObj = {
    id:"",
    name:"",
    units:[]
  };
  finalTransactionArray = {
      id:"",
      supplier_id:"",
      products:[]
    };
  product_selected_in_modal = "";
  constructor( private localStorageConverter : LocalstorageConverterService, private defaultVars: DefaultVariablesService) { }

  ngOnInit() {
    this.getAllSuppliers();
    this.getAllProducts();
    this.metalTypes = this.defaultVars.getMetalTypes();
    this.paymentTypes = this.defaultVars.getPaymentTypes();
  }

  getAllSuppliers(){
      if(localStorage.getItem("suppliers") !== null){
        this.suppliers = this.localStorageConverter.getJsonObjectByKey("suppliers");
      }
      else{
        console.log("Empty:suppliers");
      }
    }

   getAllProducts(){
    if(localStorage.getItem("products") !== null){
      this.products = this.localStorageConverter.getJsonObjectByKey("products");
    }
    else{
      console.log("Empty:products");
    }
   } 
   onModelSelect(e){
    console.log(e.target.value);
   }
   updateProductUnitInputs(e){
      console.log(e.target.value);
      if( this.product_selected_in_modal.length < 1){
        alert("Please select the product model first");
        console.log("Product not selected");
        return;
      }
      if(e.target.value > 0){
        this.transactionSingleProductObj.units=[];
        
        for(var i=0; i < e.target.value; i ++){
          let newUnit = new ProductUnit("",this.product_selected_in_modal,0);
          this.transactionSingleProductObj.units.push(newUnit);
        }
        
        // console.log("Units:", this.transactionSingleProductObj.units );
      }
   }

   saveUnitsOfProduct(){
      this.transactionSingleProductObj.units = this.getProductUnitsDataFromModal();
      var product_units_from_db = this.localStorageConverter.getJsonObjectByKey("product_units");
      for(var i=0; i < this.transactionSingleProductObj.units.length ; i++){
        var tmpUnitObj:ProductUnit = this.transactionSingleProductObj.units[i];
        tmpUnitObj.id = "PUNIT" + product_units_from_db.length;
        product_units_from_db.push(this.transactionSingleProductObj.units[i]);
      }
      this.localStorageConverter.setJsonObjectToKey("product_units", product_units_from_db);

      this.transactionSingleProductObj.id = $("#product_selected_in_modal").val()+"";
      this.transactionSingleProductObj.name = $("#product_selected_in_modal option:selected").text();
      var tmpObj = JSON.parse(JSON.stringify(this.transactionSingleProductObj));
      console.log("transactionSingleProductObj:",tmpObj);
      this.finalTransactionArray.products.push(JSON.parse(JSON.stringify(tmpObj)));
      console.log("Transaction Array:", this.finalTransactionArray);
   }

   getProductUnitsDataFromModal(){
      var unitsArray = [];
      var totalWeight = Number($("#total_weight").val());

      $(".new-product-unit-row").each(function(i){
        var productIdIn = $(this).find(".product_id").val();
        var productWeightIn = $(this).find(".product_unit_weight").val();
        var productValue = $("#product_selected_in_modal").val();
        totalWeight = totalWeight + Number(productWeightIn);
        unitsArray.push(new ProductUnit(productIdIn+"", productValue + "", Number(productWeightIn) ));
      });
      $("#total_weight").val(totalWeight);
      console.log("UnitsArray:", unitsArray);
      return unitsArray;
   }

   onPurchaseCreation(f:NgForm){
    if(f.form.valid){
      console.log("FormIn:", f.form.value);
      var formObj = f.form.value;
      var finalPurchaseRecord = new Purchase( 
        formObj.supplier_id,
        formObj.wastage,
        formObj.payment_type,
        formObj.purchasetime_gold_value,
        formObj.last_date_of_payement,
        Number(Number($("#total_weight").val()).toFixed(2)),
        formObj.total_cash,
        formObj.pending_cash_balance,
        formObj.pending_weight_balance,
        formObj.paid_cash,
        formObj.prducts_list 
       );

       finalPurchaseRecord.prducts_list = this.finalTransactionArray.products;       
       if(localStorage.getItem("purchases") === null){
          this.localStorageConverter.setJsonObjectToKey("purchases",[]);
       }

      let purchasesFromStorage: [any] =  this.localStorageConverter.getJsonObjectByKey("purchases");
      purchasesFromStorage.push(finalPurchaseRecord);
      console.log("FinalProductList:",purchasesFromStorage);
      this.localStorageConverter.setJsonObjectToKey("purchases",purchasesFromStorage);
       alert("Saved");
    }
    else{
      alert("Please fill all the fields");
      console.log(f.form.valid);
    }
   }
}
