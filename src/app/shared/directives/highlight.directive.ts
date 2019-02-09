// highlight.directive.ts
import { Directive,
         OnInit,
         HostListener,
         ElementRef,
         Input,
         Output,
         Renderer2,
         EventEmitter
} from '@angular/core';

// Directives are applied as attribute

// <h2 appHighlight />
// <div appHighlight />
// life cycle, init/destroy
// input, output 
// no template

@Directive({
  selector: '[appHighlight]', // [] is must for name
})
export class HighlightDirective implements OnInit {

  @Input()
  highlightColor: string;

  @Input()
  markerColor: string;


  @Output()
  highlighterOn: EventEmitter<boolean> = new EventEmitter();

  constructor(private hostElement: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() {
    // default value if input not passed
    this.markerColor = this.markerColor || 'white';
    this.highlightColor = this.highlightColor || 'lightblue';

    console.log('marker ', this.markerColor);
    console.log('highlight', this.highlightColor);

    this.setBgColor(this.markerColor);
  }

  setBgColor(color: string) {
    this.renderer.setStyle(this.hostElement.nativeElement,
                           'background',
                           color);
  }

  @HostListener('mouseenter', ['$event'])
  onEnter(event: Event) {
    console.log('directive mouse enter', event);
    this.setBgColor(this.highlightColor);
    this.highlighterOn.emit(true);
  }

  @HostListener('mouseleave')
  onLeave() {
    console.log('directive mouse leave');
    this.setBgColor(this.markerColor);
    this.highlighterOn.emit(false);
  }

}
