import { Component, OnInit } from '@angular/core';
import { CustomerInfoService } from '../../services/customer-info.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { Customer } from 'app/models/customer';

@Component({
  selector: 'app-customers-tab',
  templateUrl: './customers-tab.component.html',
  styleUrls: ['./customers-tab.component.scss']
})
export class CustomersTabComponent implements OnInit {

  customers = [];

  constructor(private customerInfoServ: CustomerInfoService, private router: Router) {
    this.getCustomers();
   }

  getCustomers(){
    this.customerInfoServ.getCustomersList().subscribe(
      (data:Customer[]) => {
        // this.customers = data;
        this.customers = data;
        console.log("We got", data);
      });
  }
  createNewCustomer(){
    this.router.navigateByUrl('/new-customer');
  }

  ngOnInit() {
  }

}
