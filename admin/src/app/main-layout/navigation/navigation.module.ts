import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation.component';
import { AuthService } from '../../services/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  declarations: [
    NavigationComponent,
  ],
  exports: [
    NavigationComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: []
})
export class NavigationModule implements OnInit{


  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(){

  }
}
