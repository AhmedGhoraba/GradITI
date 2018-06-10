import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

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
