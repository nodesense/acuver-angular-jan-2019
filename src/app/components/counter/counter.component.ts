import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {

  counter = 0;
  timer: any;

  constructor() { 
    console.log('Counter created');
  }

  ngOnInit() {
    console.log('Counter onInit');
     this.timer = setInterval(  ()  =>  {
      this.counter++;
      console.log('Counter is ', this.counter);
    }, 5000);
  }

  // life cycle method, called before destorying component
  ngOnDestroy() {
    console.log('Counter ngOnDestroy');
    clearInterval(this.timer); // stop the timer
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
