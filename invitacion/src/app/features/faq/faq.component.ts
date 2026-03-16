
import { Component, inject, signal } from '@angular/core';
import { WeddingConfigService } from '../../core/services/wedding-config.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
@Component({ selector:'app-faq', standalone:true, imports:[RevealDirective], templateUrl:'./faq.component.html', styleUrl:'./faq.component.scss' })
export class FaqComponent {
  cfg  = inject(WeddingConfigService);
  open = signal<number|null>(null);
  toggle(i:number){ this.open.set(this.open()===i ? null : i); }
}
