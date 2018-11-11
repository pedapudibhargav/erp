import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'app/services/supplier.service';
import { Supplier } from 'app/models/supplier';

@Component({
  selector: 'app-all-suppliers',
  templateUrl: './all-suppliers.component.html',
  styleUrls: ['./all-suppliers.component.scss']
})
export class AllSuppliersComponent implements OnInit {

  suppliers = [];
  constructor(private supplierApi : SupplierService) {
    this.getProducts();
   }

  ngOnInit() {
  }

  getProducts(){
    this.supplierApi.getAllSuppliers().subscribe(
      (data:Supplier[]) => {
        // this.customers = data;
        this.suppliers = data;
        console.log("We got", data);
      });
  }

}
