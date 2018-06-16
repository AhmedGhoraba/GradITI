import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service4',
  templateUrl: './add-service4.component.html',
  styleUrls: ['./add-service4.component.scss']
})
export class AddService4Component implements OnInit {

  constructor(private OurRoute:Router) { }


  //function to redirect links(route)
  redirectToMyServs():void
  {
    this.OurRoute.navigateByUrl('/Myservices');
  }
  
  redirectToHome():void
  {
    this.OurRoute.navigateByUrl('');
  }

  ngOnInit() {
  }

}
