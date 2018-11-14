import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'app/services/supplier.service';
import { Supplier } from 'app/models/supplier';
import { LocalstorageConverterService } from 'app/services/localstorage-converter.service';

@Component({
  selector: 'app-all-suppliers',
  templateUrl: './all-suppliers.component.html',
  styleUrls: ['./all-suppliers.component.scss']
})
export class AllSuppliersComponent implements OnInit {

  suppliers = [];
  constructor(private supplierApi : SupplierService, private localStorageConverter : LocalstorageConverterService) {
    this.getAllSuppliers();
   }

  ngOnInit() {
  }

  getAllSuppliers(){
    // this.supplierApi.getAllSuppliers().subscribe(
    //   (data:Supplier[]) => {
    //     this.suppliers = data;
    //     console.log("We got", data);
    //   });
    if(localStorage.getItem("suppliers") !== null){
      this.suppliers = this.localStorageConverter.getJsonObjectByKey("suppliers");
    }
    else{
      console.log("Empty:suppliers");
    }

  }

}
