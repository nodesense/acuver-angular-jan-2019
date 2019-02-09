import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  show = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.show = !this.show;
  }

  onHighlight(status: boolean) {
    console.log('directive event highlight is ', status);
  }

}
