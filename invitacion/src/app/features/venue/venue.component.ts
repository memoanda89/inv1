
import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { WeddingConfigService } from '../../core/services/wedding-config.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
@Component({ selector:'app-venue', standalone:true, imports:[RevealDirective], templateUrl:'./venue.component.html', styleUrl:'./venue.component.scss' })
export class VenueComponent {
  cfg     = inject(WeddingConfigService);
  san     = inject(DomSanitizer);
  copied  = signal(false);
  mapUrl: SafeResourceUrl;
  constructor(){ this.mapUrl = this.san.bypassSecurityTrustResourceUrl(this.cfg.config.mapEmbedUrl); }
  copy(){
    navigator.clipboard?.writeText('Hacienda Los Laureles, San Miguel de Allende, Guanajuato, México').catch(()=>{});
    this.copied.set(true); setTimeout(()=>this.copied.set(false), 2500);
  }
}
