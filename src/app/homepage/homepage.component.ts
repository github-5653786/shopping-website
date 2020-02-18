import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const images = document.querySelectorAll("[data-src]");
    const imgob = new IntersectionObserver((entries, imgobserver) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          var src = entry.target.getAttribute("data-src");
          entry.target.setAttribute("src", src);
          entry.target.classList.add("loaded");
          imgobserver.unobserve(entry.target);
        }
      })
    });

    images.forEach(image => {
      imgob.observe(image);
    });
  }

}
