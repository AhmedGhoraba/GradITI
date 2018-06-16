import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-one-service',
  templateUrl: './one-service.component.html',
  styleUrls: ['./one-service.component.scss']
})
export class OneServiceComponent implements OnInit {

  constructor(private OurRoute:Router) { }

  //function to redirect links(route)
  redirectToServDetails():void
{
  this.OurRoute.navigateByUrl('/ServiceDetails');
}
  ngOnInit() {
  }

}


