import { Component, signal, inject } from '@angular/core';
import { WeddingService }  from '../../services/wedding.service';
import { ConfettiService } from '../../services/confetti.service';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  templateUrl: './rsvp.component.html',
  styleUrl:    './rsvp.component.scss'
})
export class RsvpComponent {
  readonly wedding  = inject(WeddingService);
  private confetti  = inject(ConfettiService);

  responded = signal(false);
  accepted  = signal(false);

  confirm(yes: boolean) {
    this.responded.set(true);
    this.accepted.set(yes);
    if (yes) this.confetti.launch(false);
  }
}
