import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SupplierService } from 'app/services/supplier.service';

@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styleUrls: ['./new-supplier.component.scss']
})
export class NewSupplierComponent implements OnInit {

  constructor(private supplierApi: SupplierService) { }

  ngOnInit() {
  }

  onSupplierCreation(f:NgForm){
    if(f.form.valid){
      this.supplierApi.createSupplier(f)
        .subscribe( (response) => {
          console.log("Response:",response);
        },
        (error)=>{
          console.log("Error:", error);
        });
    }
    else{
      console.error("Invalid form");
      console.log(f.form.valid);
      alert("Please fill in the form");
    }  
  }

}
