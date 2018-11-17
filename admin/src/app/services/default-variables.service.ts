import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefaultVariablesService {
  metalTypes = [
    {
      name:"Gold",
      value:"gold"
    },
    {
      name:"Silver",
      value:"silver"
    },
    {
      name:"Bronze",
      value:"bronze"
    }
  ];

  productCategories =[
    {
      name:"Rings",
      value:"rings"
    },
    {
      name:"Chains",
      value:"chains"
    },
    {
      name:"Ear Rings",
      value:"ear_rings"
    },
    {
      name:"Bangles",
      value:"bangles"
    },
    {
      name:"Anklets",
      value:"anklets"
    },
    {
      name:"Bracelets",
      value:"bracelets"
    }

  ];

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

  constructor() { }

  getMetalTypes(){
    return this.metalTypes;
  }

  getProductCategories(){
    return this.productCategories;
  }

  getPaymentTypes(){
    return this.paymentTypes;
  }

  getPaymentTypeByValue(valueIn:string){
    for(var i=0; i < this.paymentTypes.length; i++){
      if(this.paymentTypes[i].value == valueIn){
        return this.paymentTypes[i].name;
      }
    }
    return "";
  }

}
