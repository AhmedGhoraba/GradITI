import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-header-after',
  templateUrl: './header-after.component.html',
  styleUrls: ['./header-after.component.scss']
})
export class HeaderAfterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".notify").on('mouseover', function(event){
      event.stopPropagation();
      $(this).addClass('animated swing');
  });
  $(".notify").on('mouseout', function(event){
      event.stopPropagation();
      $(this).removeClass('animated swing');
  });

  $(".msg").on('mouseover', function(event){
    event.stopPropagation();
    $(this).addClass('animated zoomIn');
});
$(".msg").on('mouseout', function(event){
    event.stopPropagation();
    $(this).removeClass('animated zoomIn');
});

$(".numCoin img").on('mouseover', function(event){
  event.stopPropagation();
  $(this).addClass('animated flip');
});
$(".numCoin img").on('mouseout', function(event){
  event.stopPropagation();
  $(this).removeClass('animated flip');
});
  }

}
