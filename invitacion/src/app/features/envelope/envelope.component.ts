
import { Component, inject } from '@angular/core';
import { WeddingStateService } from '../../core/services/wedding-state.service';
@Component({ selector:'app-envelope', standalone:true, templateUrl:'./envelope.component.html', styleUrl:'./envelope.component.scss' })
export class EnvelopeComponent {
  state  = inject(WeddingStateService);
  opened = false;
  open() { if (this.opened) return; this.opened = true; setTimeout(() => this.state.open(), 1300); }
}
