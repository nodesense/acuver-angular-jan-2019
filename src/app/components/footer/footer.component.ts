import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // Input helps to accept parameter from parent component
  @Input()
  year: number;

  @Input()
  company: string;
  
  constructor() { }

  ngOnInit() {
    console.log('typeof ', typeof this.year);
  }

}
