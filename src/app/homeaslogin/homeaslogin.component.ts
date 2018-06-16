import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeaslogin',
  templateUrl: './homeaslogin.component.html',
  styleUrls: ['./homeaslogin.component.scss']
})
export class HomeasloginComponent implements OnInit {

  constructor(private OurRoute:Router) { }

//function to redirect links(route)
  redirectToServDetails():void
{
  this.OurRoute.navigateByUrl('/ServiceDetails');
}

  ngOnInit() {
  }

}
