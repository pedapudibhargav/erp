import { Component, OnInit } from '@angular/core';
import { CustomerInfoService } from 'app/services/customer-info.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  constructor(private customerInfoServ: CustomerInfoService,) { 

  }

  ngOnInit() {
  }

  onCustomerSignUp(f:NgForm){
    if(f.form.valid){
      this.customerInfoServ.createNewCustomer(f)
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
