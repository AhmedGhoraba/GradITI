// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'; //ng bootstrap
import { RouterModule, Routes } from '@angular/router'; //for routing navigation

//huda components
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

//ahmed component
import { AddService1Component } from './add-service1/add-service1.component';
import { AddService2Component } from './add-service2/add-service2.component';
import { AddService3Component } from './add-service3/add-service3.component';
import { AddService4Component } from './add-service4/add-service4.component';
import { AddSerNavComponent } from './add-ser-nav/add-ser-nav.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { AllServicesComponent } from './all-services/all-services.component';
import { AllRequestsComponent } from './all-requests/all-requests.component';
import { TopUsersComponent } from './top-users/top-users.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { HomeasloginComponent } from './homeaslogin/homeaslogin.component';
import { PostRequestComponent } from './post-request/post-request.component';

//latest components
import { MessageComponent } from './message/message.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { OneRequestComponent } from './one-request/one-request.component';
import { OneServiceComponent } from './one-service/one-service.component';

//services

const OurRoutes:Routes = [
{path:'' , component: HomeasloginComponent},
{path:'SignIn' , component: SignInComponent },
{path:'SignUp' , component: SignUpComponent},
{path:'HomeBeforLogIn' , component: HomeBeforLogInComponent},
{path:'Profile' , component: ProfileComponent},
{path:'Myservices' , component: MyservicesComponent},
{path:'PostRequest' , component: PostRequestComponent},
{path:'MyBalance' , component: MyBalanceComponent},
{path:'ServiceDetails' , component: ServiceDetailsComponent},
{path:'AddServiceStep1' , component: AddService1Component},
{path:'AddServiceStep2' , component: AddService2Component},
{path:'AddServiceStep3' , component: AddService3Component},
{path:'AddServiceStep4' , component: AddService4Component},
{path:'PostRequest' , component: PostRequestComponent},
{path:'Chat' , component: MessageComponent},
{path:'Notifications' , component: NotificationsComponent},
{path:'MyRequests' , component: MyRequestsComponent},
{path:'AllServices' , component: AllServicesComponent},
{path:'AllRequests' , component: AllRequestsComponent}
];

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
    FooterComponent,
    AddService1Component,
    AddService2Component,
    AddService3Component,
    AddService4Component,
    AddSerNavComponent,
    ServiceDetailsComponent,
    AllServicesComponent,
    AllRequestsComponent,
    TopUsersComponent,
    MyservicesComponent,
    HomeasloginComponent,
    PostRequestComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(OurRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
