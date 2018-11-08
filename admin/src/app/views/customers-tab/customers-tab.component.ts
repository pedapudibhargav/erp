import { Component, OnInit } from '@angular/core';
import { CustomerInfoService } from '../../services/customer-info.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customers-tab',
  templateUrl: './customers-tab.component.html',
  styleUrls: ['./customers-tab.component.scss']
})
export class CustomersTabComponent implements OnInit {

  customers = [];

  constructor(private customerInfoServ: CustomerInfoService) {
   }

  getCustomers(){
    this.customerInfoServ.getCustomersList()
    .subscribe(
      data => {
        console.log("We got", data);
      });
  }
  createNewCustomer(){

  }
  
  onCustomerSignUp(f:NgForm){
    if(f.form.valid)
      this.customerInfoServ.createNewCustomer(f);
    else{
      console.error("Invalid form");
      console.log(f.form.valid);
    }  
  }

  ngOnInit() {
  }

}
