import { Component, OnInit, HostListener } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, noPause: true, showIndicators: true } }
  ]
})
export class ImagesComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  onScroll3() {
    let prev = window.pageYOffset;
    if (prev > 800) {
      document.getElementById("top").style.visibility='visible'
    } else {
      document.getElementById("top").style.visibility = 'hidden';
    }
  }


  isMobileView = true;
  // code to hide the back to top icon in phone view
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const screenSize = 768;
    // this.isMobileView = event.target.innerWidth < screenSize;
    if (event.target.innerWidth < screenSize) {
      this.isMobileView = false
      console.log('screen mob', this.isMobileView);
    }
    else {
      this.isMobileView = true;
    }
  }

  ngOnInit() {
  }

  backtotop() {
    window.scrollTo({
      'behavior': 'smooth',
      'top': 0,
      'left': 0
    });
  }

}
