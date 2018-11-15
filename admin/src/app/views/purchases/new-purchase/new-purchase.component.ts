import { Component, OnInit } from '@angular/core';
import { LocalstorageConverterService } from 'app/services/localstorage-converter.service';
import { DefaultVariablesService } from 'app/services/default-variables.service';
import { ProductUnit } from 'app/models/product-unit';

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
  transactionModelObj = {
    id:"",
    name:"",
    units:[]
  };
  finalTransactionArray = [
    {
      id:"",
      name:"",
      units:[]
    }
  ];
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
        this.transactionModelObj.units=[];
        
        for(var i=0; i < e.target.value; i ++){
          let newUnit = new ProductUnit(i+"", this.product_selected_in_modal,0);
          this.transactionModelObj.units.push(newUnit);
        }
        
        console.log("Units:", this.transactionModelObj.units );
      }
   }
}
