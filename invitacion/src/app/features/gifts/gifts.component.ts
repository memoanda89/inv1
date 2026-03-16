
import { Component, inject, signal } from '@angular/core';
import { WeddingConfigService } from '../../core/services/wedding-config.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
@Component({ selector:'app-gifts', standalone:true, imports:[RevealDirective], templateUrl:'./gifts.component.html', styleUrl:'./gifts.component.scss' })
export class GiftsComponent {
  cfg = inject(WeddingConfigService);
  showAccount = signal(false);
  copied      = signal(false);
  copy(text: string){ navigator.clipboard?.writeText(text).catch(()=>{}); this.copied.set(true); setTimeout(()=>this.copied.set(false),2500); }
}
