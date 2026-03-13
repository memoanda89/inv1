import { Component, inject } from '@angular/core';
import { WeddingService }  from '../../services/wedding.service';
import { ConfettiService } from '../../services/confetti.service';

@Component({
  selector: 'app-venue',
  standalone: true,
  templateUrl: './venue.component.html',
  styleUrl:    './venue.component.scss'
})
export class VenueComponent {
  readonly wedding = inject(WeddingService);
  private confetti = inject(ConfettiService);
  copied = false;
  showBadge = false;

  onVisible() {
    this.showBadge = true;
    this.confetti.launch(true);
  }

  copy() {
    navigator.clipboard.writeText(`${this.wedding.venue}, ${this.wedding.city}, México`);
    this.copied = true;
    setTimeout(() => this.copied = false, 2500);
  }
}
