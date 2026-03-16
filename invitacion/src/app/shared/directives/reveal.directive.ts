import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

type RevealType = 'default' | 'left' | 'right' | 'zoom' | 'flip';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  // Accept empty string (bare attribute) OR a named variant
  @Input() set appReveal(val: RevealType | '') {
    this._type = (val === '' || val === null || val === undefined) ? 'default' : val;
  }
  @Input() revealDelay = 0;

  private _type: RevealType = 'default';
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const classMap: Record<RevealType, string> = {
      default: 'reveal',
      left:    'reveal-left',
      right:   'reveal-right',
      zoom:    'reveal-zoom',
      flip:    'reveal-flip',
    };

    const host = this.el.nativeElement;
    host.classList.add(classMap[this._type]);
    if (this.revealDelay) host.style.transitionDelay = `${this.revealDelay}ms`;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          host.classList.add('visible');
          this.observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    this.observer.observe(host);
  }

  ngOnDestroy() { this.observer?.disconnect(); }
}
