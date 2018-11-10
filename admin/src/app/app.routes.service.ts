
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
import { TransactionsComponent } from './views/transactions/transactions.component';
import { MerchCustomerPanelComponent } from './views/merch-customer-panel/merch-customer-panel.component';
import { NewCustomerComponent } from './views/customers-tab/new-customer/new-customer.component';
import { ProductsComponent } from './views/products/products.component';
import { NewProductComponent } from './views/products/new-product/new-product.component';


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'mer-dashboard' },
  // { path: 'mer-dashboard' , component : Dashboard1Component, canActivate : [AuthGuardService]},
  { path: 'mer-dashboard' , component : Dashboard1Component},
  { path: 'customers' , component : CustomersTabComponent},
  { path: 'new-customer', component: NewCustomerComponent },
  { path: 'products' , component : ProductsComponent},
  { path: 'new-product' , component : NewProductComponent},
  { path: 'transactions' , component : TransactionsComponent},
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
