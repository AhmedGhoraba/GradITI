import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm,NgModel } from '@angular/forms';
import {DatatransferService} from '../datatransfer.service';

@Component({
  selector: 'app-add-service1',
  templateUrl: './add-service1.component.html',
  styleUrls: ['./add-service1.component.scss']
})
export class AddService1Component implements OnInit {
  mydata:Array<object>=[]
  constructor(private OurRoute:Router , private trans:DatatransferService) { }

  // collect data from add service form
  formpart1(data):void{
    console.log(data);
    this.mydata = data;
    this.sendData(this.mydata);
    this.OurRoute.navigateByUrl('/AddServiceStep2');
  }

  sendData(hamda){
    this.trans.dataTransporter(hamda);
  }



redirectToHome():void
{
  this.OurRoute.navigateByUrl('');
}
  
  ngOnInit() {
    
  }

}
