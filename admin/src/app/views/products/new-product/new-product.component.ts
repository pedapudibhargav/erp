import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'app/services/products.service';
import { LocalstorageConverterService } from 'app/services/localstorage-converter.service';
import { DefaultVariablesService } from 'app/services/default-variables.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  categories = [];
  constructor(private prodApi: ProductsService, private localStorageConverter : LocalstorageConverterService, private variableService:  DefaultVariablesService) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories(){
    this.categories = this.variableService.getProductCategories();
  }

  onProductCreation(f:NgForm){
    if(f.form.valid){
      // this.prodApi.createProduct(f)
      //   .subscribe( (response) => {
      //     console.log("Response:",response);
      //   },
      //   (error)=>{
      //     console.log("Error:", error);
      //   });


      console.log("FormIn:", f.form.value);
      var newProductIn = f.form.value;
      if(localStorage.getItem("products") === null){
        this.localStorageConverter.setJsonObjectToKey("products",[]);
      }
      let productsFromStorage: [any] =  this.localStorageConverter.getJsonObjectByKey("products");
      newProductIn["id"] = productsFromStorage.length;
      productsFromStorage.push(newProductIn);
      console.log("FinalProductList:",productsFromStorage);
      this.localStorageConverter.setJsonObjectToKey("products",productsFromStorage);
    }
    else{
      console.error("Invalid form");
      console.log(f.form.valid);
      alert("Please fill in the form");
    }  
  }
}
