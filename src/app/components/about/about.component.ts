// about.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // ViewChild - get the DOM reference in the Component
  // #inputName, #greeting

  // ElementRef - is a wrapper for DOM element
  @ViewChild('inputName')
  inputNameElement: ElementRef;

  @ViewChild('greeting2')
  greeting2Element: ElementRef;

  members: string[] = ['Venkat', 'Karthik'];

  constructor() { }

  ngOnInit() {
    // nativeElement is a real dom
    this.inputNameElement.nativeElement.focus();
    this.inputNameElement.nativeElement.value = 'enter name';

    this.greeting2Element.nativeElement.textContent = 'Hello NG';
  }

  addMember(name: string) {
    this.members.push(name);
  }

  empty() {
    this.members = [];
  }

}
