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
    this.customerInfoServ.getCustomersList().get()
    .then(querySnapshot => {
      this.customers = [];
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          this.customers.push(doc.data());
          console.log(this.customers);
      });
    })
    .catch(e => console.log(e));;
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
