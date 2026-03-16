
import { Component, inject, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { WeddingConfigService } from '../../core/services/wedding-config.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
@Component({ selector:'app-itinerary', standalone:true, imports:[RevealDirective], templateUrl:'./itinerary.component.html', styleUrl:'./itinerary.component.scss' })
export class ItineraryComponent implements AfterViewInit {
  cfg = inject(WeddingConfigService);
  @ViewChild('line') lineRef!: ElementRef<HTMLElement>;
  ngAfterViewInit(){
    const obs = new IntersectionObserver(([e]) => {
      if(e.isIntersecting){ this.lineRef.nativeElement.classList.add('drawn'); obs.disconnect(); }
    },{threshold:.1});
    obs.observe(this.lineRef.nativeElement);
  }
}
