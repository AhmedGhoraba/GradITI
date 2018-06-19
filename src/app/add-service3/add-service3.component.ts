import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient }from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import {DatatransferService } from '../datatransfer.service';
import * as firebase from 'firebase';



@Component({
  selector: 'app-add-service3',
  templateUrl: './add-service3.component.html',
  styleUrls: ['./add-service3.component.scss']
})
export class AddService3Component implements OnInit {
  selectefile = null;
  form;
  constructor(private OurRoute:Router, private http:HttpClient, private db:AngularFirestore,private rec:DatatransferService) { }
  //function to redirect links(route)
  redirectToAddServs():void
  {
    this.OurRoute.navigateByUrl('/AddServiceStep4');
  }
  
  redirectToHome():void
  {
    this.OurRoute.navigateByUrl('');
  }

  onFileSelected(event){

    this.selectefile = <File> event.target.files[0];
    // const fb = new FormData();
    // fb.append('image',this.selectefile,this.selectefile.name)
    // this.http.post('https://us-central1-fir-cloud-functions-da766.cloudfunctions.net/uploadFile',fb).subscribe(res=>{
    //   console.log(res)
    // });
    const metaData = {'contentType':this.selectefile.type};
    const storageRef:firebase.storage.Reference = firebase.storage().ref('photos/'+ new Date().getTime() + this.selectefile.name);
    const uploadtask = storageRef.put(this.selectefile,metaData);
    console.log('uploading',this.selectefile.name)
    uploadtask.then(()=>{
      console.log ('upload complete')
      storageRef.getDownloadURL().then(url=>{
        console.log(url);
        this.form.image = url;
        this.form.uo = {id:47}
        console.log(this.form)
      })
    })
  }   
  ngOnInit() {
    this.rec.dataContainer.subscribe(mydata => {this.form=mydata,console.log(this.form)});

  }
  
}
