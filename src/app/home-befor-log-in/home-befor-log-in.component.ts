import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-befor-log-in',
  templateUrl: './home-befor-log-in.component.html',
  styleUrls: ['./home-befor-log-in.component.scss']
})
export class HomeBeforLogInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $(".btnJoin").on('mouseover', function(event){
      event.stopPropagation();
      $(this).addClass('animated rubberBand');
  });
  $(".btnJoin").on('mouseout', function(event){
      event.stopPropagation();
      $(this).removeClass('animated rubberBand');
  });
  }

}
