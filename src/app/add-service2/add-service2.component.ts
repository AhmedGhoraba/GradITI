import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service2',
  templateUrl: './add-service2.component.html',
  styleUrls: ['./add-service2.component.scss']
})
export class AddService2Component implements OnInit {

  constructor(private OurRoute:Router) { }

   //function to redirect links(route)
   redirectToAddServs():void
   {
     this.OurRoute.navigateByUrl('/AddServiceStep3');
   }
   
   redirectToHome():void
   {
     this.OurRoute.navigateByUrl('');
   }

  ngOnInit() {
  }

}
