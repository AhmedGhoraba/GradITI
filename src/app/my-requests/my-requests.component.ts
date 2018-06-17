import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss']
})
export class MyRequestsComponent implements OnInit {

  constructor(private OurRoute:Router) { }


  //navigate (routes)
  redirectToAddReq():void
  {
    this.OurRoute.navigateByUrl('/PostRequest');
  }

  ngOnInit() {
  }

}
