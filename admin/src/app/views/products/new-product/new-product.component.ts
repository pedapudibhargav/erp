import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'app/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  constructor(private prodApi: ProductsService) { }

  ngOnInit() {
  }

  onProductCreation(f:NgForm){
    if(f.form.valid){
      this.prodApi.createProduct(f)
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
