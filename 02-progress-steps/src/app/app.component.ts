import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = '02-progress-steps';
  circles: Array<HTMLFormElement> = [];
  numOfActives = 1;

  ngOnInit(): void {
    this.circles = Array.from(document.querySelectorAll('.circle'));
  }

  prev() {
    this.numOfActives--;
    this.circles[this.numOfActives].classList.remove('active');
  }

  next() {
    this.numOfActives++;
    this.circles[this.numOfActives - 1].classList.add('active');
  }

  getProgress() {
    return `${((this.numOfActives - 1) / (this.circles.length - 1)) * 100}%`;
  }
}
