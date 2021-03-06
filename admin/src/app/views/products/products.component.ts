import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'app/services/products.service';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [];
  constructor(private router: Router, private prodductServ: ProductsService) { 
    this.getProducts();
  }

  ngOnInit() {
  }

  createNewProduct(){
    this.router.navigateByUrl('/new-product');
  }

  getProducts(){
    this.prodductServ.getProductsList().subscribe(
      (data:Product[]) => {
        // this.customers = data;
        this.products = data;
        console.log("We got", data);
      });
  }
}
