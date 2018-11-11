import { Component } from '@angular/core';

@Component({
  selector: 'splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css', './mobile-splash.component.css']
})

export class SplashComponent {
  constructor() {}

  open_toggle = "";
  black_hole_class = "black-hole";
  hole_is_closed = true;

  toggleHole(){
    this.hole_is_closed = !this.hole_is_closed
  }
}
