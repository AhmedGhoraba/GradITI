import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//components
import { AppComponent } from './app.component';
import { HeaderAfterComponent } from './header-after/header-after.component';
import { HeaderBeforeComponent } from './header-before/header-before.component';
import { HomeBeforLogInComponent } from './home-befor-log-in/home-befor-log-in.component';
import { MyBalanceComponent } from './my-balance/my-balance.component';
import { ProfUserDataComponent } from './prof-user-data/prof-user-data.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewComponent } from './review/review.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';

//services

@NgModule({
  declarations: [
    AppComponent,
    HeaderAfterComponent,
    HeaderBeforeComponent,
    HomeBeforLogInComponent,
    MyBalanceComponent,
    ProfUserDataComponent,
    ProfileComponent,
    ReviewComponent,
    SignInComponent,
    SignUpComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
