
import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { WeddingConfigService } from '../../core/services/wedding-config.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
@Component({ selector:'app-venue', standalone:true, imports:[RevealDirective], templateUrl:'./venue.component.html', styleUrl:'./venue.component.scss' })
// ✅ Correcto — inicializar mapUrl directo como field initializer
export class VenueComponent {
  private cfg = inject(WeddingConfigService);
  private san = inject(DomSanitizer);
  
  // Se inicializa como field, no en constructor
  mapUrl: SafeResourceUrl = this.san.bypassSecurityTrustResourceUrl(
    this.cfg.config.mapEmbedUrl
  );
  
  copied = signal(false);
  
  copy() {
    navigator.clipboard?.writeText('Hacienda Los Laureles, San Miguel de Allende, Guanajuato, México').catch(() => {});
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2500);
  }
}