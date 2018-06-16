import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service3',
  templateUrl: './add-service3.component.html',
  styleUrls: ['./add-service3.component.scss']
})
export class AddService3Component implements OnInit {

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
