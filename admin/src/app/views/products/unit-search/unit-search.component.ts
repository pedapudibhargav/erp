import { Component, OnInit } from '@angular/core';
import { LocalstorageConverterService } from 'app/services/localstorage-converter.service';

@Component({
  selector: 'app-unit-search',
  templateUrl: './unit-search.component.html',
  styleUrls: ['./unit-search.component.scss']
})
export class UnitSearchComponent implements OnInit {

  productUnits = [];
  constructor(private localStorageConverter : LocalstorageConverterService) { }

  ngOnInit() {
    this.getAllProductUnits();
  }

  getAllProductUnits(){
    if(localStorage.getItem("product_units") !== null){
      this.productUnits = this.localStorageConverter.getJsonObjectByKey("product_units");
    }
    else{
      console.log("Empty:product_units");
    }
  }

}
