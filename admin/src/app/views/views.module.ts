import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { CalendarModule } from 'angular-calendar';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from '../main-layout/footer/footer.component';
import { BasicTableComponent } from './tables/basic-table/basic-table.component';
import { ModalsComponent } from './modals/modals.component';
import { TypographyComponent } from './css/typography/typography.component';
import { IconsComponent } from './css/icons/icons.component';
import { Map1Component } from './maps/map1/map1.component';
import { StatsCardComponent } from './dashboards/common/stats-card/stats-card.component';
import { StatsCard2Component } from './dashboards/common/stats-card2/stats-card2.component';
import { Dashboard1Component } from './dashboards/dashboard1/dashboard1.component';
import { GridComponent } from './css/grid/grid.component';
import { MediaObjectComponent } from './css/media-object/media-object.component';
import { UtilitiesComponent } from './css/utilities/utilities.component';
import { ImagesComponent } from './css/images/images.component';
import { ColorsComponent } from './css/colors/colors.component';
import { ShadowComponent } from './css/shadow/shadow.component';
import { Profile1Component } from './profile/profile1/profile1.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CustomersTabComponent } from './customers-tab/customers-tab.component';
import { MerchCustomerPanelComponent } from './merch-customer-panel/merch-customer-panel.component';
import { NewCustomerComponent } from './customers-tab/new-customer/new-customer.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { SalesComponent } from './sales/sales.component';
import { SupplierComponent } from './supplier/supplier.component';
import { NewSupplierComponent } from './supplier/new-supplier/new-supplier.component';
import { AllSuppliersComponent } from './supplier/all-suppliers/all-suppliers.component';
import { AllPurchasesComponent } from './purchases/all-purchases/all-purchases.component';
import { NewPurchaseComponent } from './purchases/new-purchase/new-purchase.component';
import { ProductsSearchComponent } from './products/products-search/products-search.component';
import { NewProductUnitComponent } from './products/new-product-unit/new-product-unit.component';
import { UnitSearchComponent } from './products/unit-search/unit-search.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: ''
    }),
    CalendarModule.forRoot()
  ],
  declarations: [
    FooterComponent,
    BasicTableComponent,
    ModalsComponent,
    TypographyComponent,
    IconsComponent,
    Map1Component,
    StatsCardComponent,
    StatsCard2Component,
    Dashboard1Component,
    GridComponent,
    MediaObjectComponent,
    UtilitiesComponent,
    ImagesComponent,
    ColorsComponent,
    ShadowComponent,
    Profile1Component,
    HelpComponent,
    LoginComponent,
    SignupComponent,
    CustomersTabComponent,
    MerchCustomerPanelComponent,
    NewCustomerComponent,
    ProductsComponent,
    NewProductComponent,
    PurchasesComponent,
    SalesComponent,
    SupplierComponent,
    NewSupplierComponent,
    AllSuppliersComponent,
    AllPurchasesComponent,
    NewPurchaseComponent,
    ProductsSearchComponent,
    NewProductUnitComponent,
    UnitSearchComponent,

  ],
  exports: [
    FooterComponent,
    BasicTableComponent,
    ModalsComponent,
    TypographyComponent,
    IconsComponent,
    Map1Component,
    StatsCardComponent,
    StatsCard2Component,    
    Dashboard1Component,
    GridComponent,
    MediaObjectComponent,
    UtilitiesComponent,
    ImagesComponent,
    ColorsComponent,
    ShadowComponent,

  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
