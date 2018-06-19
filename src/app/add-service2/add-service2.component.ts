import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DatatransferService} from '../datatransfer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-service2',
  templateUrl: './add-service2.component.html',
  styleUrls: ['./add-service2.component.scss']
})
export class AddService2Component implements OnInit {

  constructor(private OurRoute:Router, private rec:DatatransferService) { }
  form;
   //function to redirect links(route)
   redirectToAddServs():void
   {
  }
  
  formpart2(data){
    console.log(data);
    this.OurRoute.navigateByUrl('/AddServiceStep3');
   }
   redirectToHome():void
   {
     this.OurRoute.navigateByUrl('');
   }

  ngOnInit() {
    this.rec.dataContainer.subscribe(mydata => {this.form=mydata,console.log(this.form)});
  }

}
