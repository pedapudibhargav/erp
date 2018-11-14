import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SupplierService } from 'app/services/supplier.service';
import { LocalstorageConverterService } from 'app/services/localstorage-converter.service';

@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styleUrls: ['./new-supplier.component.scss']
})
export class NewSupplierComponent implements OnInit {

  constructor(private supplierApi: SupplierService, private localStorageConverter : LocalstorageConverterService) { }

  ngOnInit() {
  }

  onSupplierCreation(f:NgForm){
    if(f.form.valid){
      // this.supplierApi.createSupplier(f)
      //   .subscribe( (response) => {
      //     console.log("Response:",response);
      //   },
      //   (error)=>{
      //     console.log("Error:", error);
      //   });

      console.log("FormIn:", f.form.value);
      var newSupplier = f.form.value;
      if(localStorage.getItem("suppliers") === null){
        this.localStorageConverter.setJsonObjectToKey("suppliers",[]);
      }
      let suppliersFromStorage: [any] =  this.localStorageConverter.getJsonObjectByKey("suppliers");
      newSupplier["id"] = "sup"+suppliersFromStorage.length;
      suppliersFromStorage.push(newSupplier);
      console.log("FinalUnitsList:",suppliersFromStorage);
      this.localStorageConverter.setJsonObjectToKey("suppliers",suppliersFromStorage);
      alert("New Supplier Created");
    }
    else{
      console.error("Invalid form");
      console.log(f.form.valid);
      alert("Please fill in the form");
    }  
  }

}
