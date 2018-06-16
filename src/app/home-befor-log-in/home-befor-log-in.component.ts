import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-befor-log-in',
  templateUrl: './home-befor-log-in.component.html',
  styleUrls: ['./home-befor-log-in.component.scss']
})
export class HomeBeforLogInComponent implements OnInit {

  constructor(private OurRoute:Router) { }

//function to redirect links(route)
redirectToAllServs():void
{
  this.OurRoute.navigateByUrl('/AllServices');
}

redirectToServDetails():void
{
  this.OurRoute.navigateByUrl('/ServiceDetails');
}

redirectToSignUp():void
{
  this.OurRoute.navigateByUrl('/SignUp');
}

  ngOnInit() {    

    //animation
    $(".btnJoin").on('mouseover', function(event){
      event.stopPropagation();
      $(this).addClass('animated rubberBand');
  });
  $(".btnJoin").on('mouseout', function(event){
      event.stopPropagation();
      $(this).removeClass('animated rubberBand');
  });
  //end animation
  }

}
