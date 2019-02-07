import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter = 0;

  constructor() { 
    console.log('Counter created');
  }

  ngOnInit() {
    console.log('Counter onInit');
  }

  increment(e: Event) {
    console.log('Event is ', e);
    this.counter++;
  }

  incrementBy(n: number) {
    this.counter += n;
  }

  onMouseEnter() {
    console.log('mouse enter');
  }

  onMouseLeave() {
    console.log('mouse leave');
  }

}
