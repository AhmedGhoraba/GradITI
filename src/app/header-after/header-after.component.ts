import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-header-after',
  templateUrl: './header-after.component.html',
  styleUrls: ['./header-after.component.scss']
})
export class HeaderAfterComponent implements OnInit {

  constructor(private OurRoute:Router) { }

   //function to redirect links(route)
   redirectToHome():void
   {
     this.OurRoute.navigateByUrl('');
   }

   redirectToMsg():void
   {
     this.OurRoute.navigateByUrl('/Chat');
   }

   redirectToNotify():void
   {
     this.OurRoute.navigateByUrl('/Notifications');
   }

   redirectToMyBalance():void
   {
     this.OurRoute.navigateByUrl('/MyBalance');
   }

   redirectToProfile():void
   {
     this.OurRoute.navigateByUrl('/Profile');
   }

   redirectToMyServices():void
   {
     this.OurRoute.navigateByUrl('/Myservices');
   }

   redirectToMyReq():void
   {
     this.OurRoute.navigateByUrl('/MyRequests');
   }

   redirectToSetting():void
   {
     this.OurRoute.navigateByUrl('/Settings');
   }


  ngOnInit() {

     //for animation
    $(".notify").on('mouseover', function(event){
      event.stopPropagation();
      $(this).addClass('animated swing');
  });
  $(".notify").on('mouseout', function(event){
      event.stopPropagation();
      $(this).removeClass('animated swing');
  });

  $(".msg").on('mouseover', function(event){
    event.stopPropagation();
    $(this).addClass('animated zoomIn');
});
$(".msg").on('mouseout', function(event){
    event.stopPropagation();
    $(this).removeClass('animated zoomIn');
});

$(".numCoin img").on('mouseover', function(event){
  event.stopPropagation();
  $(this).addClass('animated flip');
});
$(".numCoin img").on('mouseout', function(event){
  event.stopPropagation();
  $(this).removeClass('animated flip');
});

//end animation
  }

}
