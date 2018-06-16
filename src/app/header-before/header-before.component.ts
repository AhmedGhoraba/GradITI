import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-header-before',
  templateUrl: './header-before.component.html',
  styleUrls: ['./header-before.component.scss']
})
export class HeaderBeforeComponent implements OnInit {

  constructor(private OurRoute:Router){
  }

  //function to redirect links(route)
  redirectToHome():void
{
  this.OurRoute.navigateByUrl('/HomeBeforLogIn');
}

redirectToSignIn():void
{
  this.OurRoute.navigateByUrl('/SignIn');
}

redirectToSignUp():void
{
  this.OurRoute.navigateByUrl('/SignUp');
}

redirectToHowItWork():void
{
  this.OurRoute.navigateByUrl('/HowItWork');
}



  ngOnInit() {

    //for animation
    $(".signUpBtn").on('mouseover', function(event){
      event.stopPropagation();
      $(this).addClass('animated pulse');
  });
  $(".signUpBtn").on('mouseout', function(event){
      event.stopPropagation();
      $(this).removeClass('animated pulse');
  });

  //end animation
  }

}
