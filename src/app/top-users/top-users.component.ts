import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-users',
  templateUrl: './top-users.component.html',
  styleUrls: ['./top-users.component.scss']
})
export class TopUsersComponent implements OnInit {

  constructor(private OurRoute:Router) { }

//redirect to (navigate)
  redirectToProfile():void
   {
     this.OurRoute.navigateByUrl('/Profile');
   }

  ngOnInit() {
  }

}
