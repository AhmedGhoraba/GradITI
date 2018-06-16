import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss']
})
export class AllServicesComponent implements OnInit {

  constructor(private OurRoute:Router) { }

  //function to redirect links(route)
  redirectToServDetails():void
{
  this.OurRoute.navigateByUrl('/ServiceDetails');
}

  ngOnInit() {
  }

}
