
import { Component, inject } from '@angular/core';
import { WeddingStateService } from '../../core/services/wedding-state.service';
import { WeddingConfigService } from '../../core/services/wedding-config.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
@Component({ selector:'app-rsvp', standalone:true, imports:[RevealDirective], templateUrl:'./rsvp.component.html', styleUrl:'./rsvp.component.scss' })
export class RsvpComponent {
  state = inject(WeddingStateService);
  cfg   = inject(WeddingConfigService);
  confirm(yes:boolean){ this.state.confirmRsvp(yes); }
}
