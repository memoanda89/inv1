import { Component, signal } from '@angular/core';
import { WeddingService }  from '../../services/wedding.service';
import { ConfettiService } from '../../services/confetti.service';

@Component({
  selector: 'app-envelope',
  standalone: true,
  templateUrl: './envelope.component.html',
  styleUrl:    './envelope.component.scss'
})
export class EnvelopeComponent {
  readonly opened    = signal(false);
  readonly animating = signal(false);

  constructor(
    private weddingSvc: WeddingService,
    private confetti: ConfettiService
  ) {}

  open() {
    if (this.opened()) return;
    this.opened.set(true);
    this.animating.set(true);
    setTimeout(() => {
      this.confetti.launch(false);
      this.weddingSvc.open();
    }, 1300);
  }
}
