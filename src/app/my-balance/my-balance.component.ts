import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-balance',
  templateUrl: './my-balance.component.html',
  styleUrls: ['./my-balance.component.scss']
})
export class MyBalanceComponent implements OnInit {

  constructor() { }

 

  ngOnInit() {
    $(".sharebtn").on('mouseover', function(event){
      event.stopPropagation();
      $(this).addClass('animated swing');
  });
  $(".sharebtn").on('mouseout', function(event){
      event.stopPropagation();
      $(this).removeClass('animated swing');
  });
  $('.alert-close').on('click', function(c){
    $(this).parent().fadeOut('slow');
  });
  }


}
