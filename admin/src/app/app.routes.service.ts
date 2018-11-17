
import { Map1Component } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { CustomersTabComponent } from './views/customers-tab/customers-tab.component';
import { MerchCustomerPanelComponent } from './views/merch-customer-panel/merch-customer-panel.component';
import { NewCustomerComponent } from './views/customers-tab/new-customer/new-customer.component';
import { ProductsComponent } from './views/products/products.component';
import { NewProductComponent } from './views/products/new-product/new-product.component';
import { PurchasesComponent } from './views/purchases/purchases.component';
import { SalesComponent } from './views/sales/sales.component';
import { SupplierComponent } from './views/supplier/supplier.component';
import { NewSupplierComponent } from './views/supplier/new-supplier/new-supplier.component';
import { AllSuppliersComponent } from './views/supplier/all-suppliers/all-suppliers.component';
import { AllPurchasesComponent } from './views/purchases/all-purchases/all-purchases.component';
import { NewPurchaseComponent } from './views/purchases/new-purchase/new-purchase.component';
import { ProductsSearchComponent } from './views/products/products-search/products-search.component';
import { NewProductUnitComponent } from './views/products/new-product-unit/new-product-unit.component';
import { UnitSearchComponent } from './views/products/unit-search/unit-search.component';
import { InstallmentsComponent } from './views/installments/installments.component';
import { NewInstallmentComponent } from './views/installments/new-installment/new-installment.component';


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'mer-dashboard' },
  // { path: 'mer-dashboard' , component : Dashboard1Component, canActivate : [AuthGuardService]},
  { path: 'mer-dashboard' , component : Dashboard1Component},
  { path: 'customers' , component : CustomersTabComponent},
  { path: 'new-customer', component: NewCustomerComponent },
  { path: 'products' , component : ProductsComponent, children:
    [
      { path: 'products-search', component: ProductsSearchComponent },
      { path: 'product-unit-search', component: UnitSearchComponent },
      { path: 'create-new-product', component:  NewProductComponent},
      { path: 'add-new-product-unit', component: NewProductUnitComponent },
    ]
  },
  { path: 'new-product' , component : NewProductComponent},
  { path: 'purchases' , component : PurchasesComponent},
  { path: 'sales' , component : SalesComponent},
  { path: 'suppliers' , component : SupplierComponent, children:
    [
      { path: 'new-supplier', component: NewSupplierComponent },
      { path: 'all-supplier', component: AllSuppliersComponent },
    ]
  },
  { path: 'new-installment/:purchaseId', component: NewInstallmentComponent },
  { path: 'installments' , component : InstallmentsComponent},  
  { path: 'purchases' , component : PurchasesComponent, children:
    [
      { path: 'new-purchase', component: NewPurchaseComponent },
      { path: 'all-purchases', component: AllPurchasesComponent },
    ]
  },
  { path: 'merc-customer-tab' , component : MerchCustomerPanelComponent, canActivate : [AuthGuardService]},

  { path: 'profiles', children:
    [
      { path: 'profile1', component: Profile1Component },
    ]
  },
  { path: 'tables', children:
    [
      { path: 'table1', component: BasicTableComponent },
    ]
  },
  { path: 'maps', children:
    [
      { path: 'map1', component: Map1Component},
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'modals', component: ModalsComponent},
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
