import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".btn-lg").on('mouseover', function(event){
      event.stopPropagation();
      $(this).addClass('animated pulse');
  });
  $(".btn-lg").on('mouseout', function(event){
      event.stopPropagation();
      $(this).removeClass('animated pulse');
  });
  }

}
