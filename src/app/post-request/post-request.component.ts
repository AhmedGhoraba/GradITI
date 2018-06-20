import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient }from '@angular/common/http';

@Component({
  selector: 'app-post-request',
  templateUrl: './post-request.component.html',
  styleUrls: ['./post-request.component.scss']
})
export class PostRequestComponent implements OnInit {

  constructor(private OurRoute:Router, private http:HttpClient) { }
  form;
   //navigate (routes)
   redirectToAddReq():void
   {
  }
  
  sendPost(data){
    this.form = data;
    this.form.type="requested";
    console.log(this.form);
    this.form.uo = {id:47};
    this.http.post('https://giveand.herokuapp.com/user/addService',this.form).subscribe(res=>{
      console.log(res)
    })
    this.OurRoute.navigateByUrl('/MyRequests');
   }

  ngOnInit() {
  }

}
