import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-request',
  templateUrl: './post-request.component.html',
  styleUrls: ['./post-request.component.scss']
})
export class PostRequestComponent implements OnInit {

  constructor(private OurRoute:Router) { }

   //navigate (routes)
   redirectToAddReq():void
   {
     this.OurRoute.navigateByUrl('/MyRequests');
   }

  ngOnInit() {
  }

}
