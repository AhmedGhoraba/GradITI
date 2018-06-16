import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myservices',
  templateUrl: './myservices.component.html',
  styleUrls: ['./myservices.component.scss']
})
export class MyservicesComponent implements OnInit {

  constructor(private OurRoute:Router) { }


  //function to redirect links(route)
  redirectToAddServs():void
{
  this.OurRoute.navigateByUrl('/AddServiceStep1');
}

  ngOnInit() {
  }

}
