import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { HomeComponent } from './componets/pages/home/home.component';
import { AboutComponent } from './componets/pages/about/about.component';
import { FAQComponent } from './componets/pages/faq/faq.component';
import { DonateComponent } from './componets/pages/donate/donate.component';
import { AdoptComponent } from './componets/pages/adopt/adopt.component';
import { ModalLoginComponent } from './componets/modal-login/modal-login.component';
import { ModalSignUpComponent } from './componets/modal-sign-up/modal-sign-up.component';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC7yKdBEIyX6GFzglEwhM2s52w4v6ZmBw",
  authDomain: "adodapet.firebaseapp.com",
  projectId: "adodapet",
  storageBucket: "adodapet.appspot.com",
  messagingSenderId: "974499403817",
  appId: "1:974499403817:web:84ffb4e5c631b80088e438",
  measurementId: "G-5P2RH3LQ38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    FAQComponent,
    DonateComponent,
    AdoptComponent,
    ModalLoginComponent,
    ModalSignUpComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
