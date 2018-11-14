import { Component, OnInit } from '@angular/core';
import { LocalstorageConverterService } from 'app/services/localstorage-converter.service';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss']
})
export class ProductsSearchComponent implements OnInit {
  products = [];

  constructor(private localStorageConverter : LocalstorageConverterService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    if(localStorage.getItem("products") !== null){
      this.products = this.localStorageConverter.getJsonObjectByKey("products");
    }
    else{
      console.log("Empty:products");
    }
  }

}
