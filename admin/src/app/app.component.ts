import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from './services/auth/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'mdb-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']

})

export class AppComponent implements OnInit {
  values: string[] = ['Tag 1', 'Tag 2', 'Tag 4'];

  specialPage: boolean;

  private specialPages: any[] = [
    '/pages/login',
    '/pages/register',
    '/pages/lock',
    '/pages/pricing',
    '/pages/single-post',
    '/pages/post-listing'
  ];

  private currentUrl = '';

  constructor(
    private router: Router,
    private location: Location,
    private authService: AuthService
  ) {

    this.router.events.subscribe((route:any) => {
      this.currentUrl = route.url;
      this.specialPage = this.specialPages.indexOf(this.currentUrl) !== -1;
    });

  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyA0xvLMX5qHe2wQEU0qmsuYUpSIzaPQGWQ",
      authDomain: "erp-software-cfde2.firebaseapp.com",
    });
  }

  goBack(): void {
    this.location.back();
  }
}
