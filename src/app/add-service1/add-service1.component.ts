import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service1',
  templateUrl: './add-service1.component.html',
  styleUrls: ['./add-service1.component.scss']
})
export class AddService1Component implements OnInit {

  constructor(private OurRoute:Router) { }


  //function to redirect links(route)
  redirectToAddServs():void
{
  this.OurRoute.navigateByUrl('/AddServiceStep2');
}

redirectToHome():void
{
  this.OurRoute.navigateByUrl('');
}
  
  ngOnInit() {
    
  }

}
