import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private OurRoute:Router) { }

//function to redirect links(route)
redirectToAddServs():void
{
  this.OurRoute.navigateByUrl('/AddServiceStep1');
}

PostNewReq():void
{
  this.OurRoute.navigateByUrl('/PostRequest');
}

  ngOnInit() {

    //animation
      $('.alert-close').on('click', function(c){
        $(this).parent().fadeOut('slow');
      });
  }

}
