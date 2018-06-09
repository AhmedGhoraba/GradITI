import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-header-before',
  templateUrl: './header-before.component.html',
  styleUrls: ['./header-before.component.scss']
})
export class HeaderBeforeComponent implements OnInit {

  constructor(){
  }
  ngOnInit() {
    $(".signUpBtn").on('mouseover', function(event){
      event.stopPropagation();
      $(this).addClass('animated pulse');
  });
  $(".signUpBtn").on('mouseout', function(event){
      event.stopPropagation();
      $(this).removeClass('animated pulse');
  });
  }

}
