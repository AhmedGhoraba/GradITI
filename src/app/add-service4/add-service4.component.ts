import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DatatransferService } from '../datatransfer.service';
import { HttpClient }from '@angular/common/http';


@Component({
  selector: 'app-add-service4',
  templateUrl: './add-service4.component.html',
  styleUrls: ['./add-service4.component.scss']
})
export class AddService4Component implements OnInit {

  constructor(private OurRoute:Router,private rec:DatatransferService , private http:HttpClient) { }

  form;

  
  //function to redirect links(route)
  redirectToMyServs():void
  {

    this.http.post('http://172.16.5.193:8080/user/addService',this.form).subscribe(res=>{
      console.log(res)
    });
    this.OurRoute.navigateByUrl('/Myservices');
  }
  
  redirectToHome():void
  {
    this.OurRoute.navigateByUrl('');
  }

  ngOnInit() {
    this.rec.dataContainer.subscribe(mydata => {this.form=mydata,console.log(this.form)});

  }

}
