// highlight.directive.ts
import { Directive,
         OnInit,
         HostListener,
         ElementRef,
         Input,
         Output,
         Renderer2
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

  @HostListener('mouseenter')
  onEnter() {
    console.log('directive mouse enter');
    this.setBgColor(this.highlightColor);
  }

  @HostListener('mouseleave')
  onLeave() {
    console.log('directive mouse leave');
    this.setBgColor(this.markerColor);
  }

}
