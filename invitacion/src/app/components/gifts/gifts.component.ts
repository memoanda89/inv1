import { Component, signal, inject } from '@angular/core';
import { WeddingService } from '../../services/wedding.service';

@Component({
  selector: 'app-gifts',
  standalone: true,
  templateUrl: './gifts.component.html',
  styleUrl:    './gifts.component.scss'
})
export class GiftsComponent {
  readonly wedding = inject(WeddingService);
  showAccount = signal(false);

  handleGift(url: string) {
    if (url === '#account')    { this.showAccount.set(!this.showAccount()); return; }
    if (url === '#honeymoon')  { alert('🌍 ¡Gracias! Transferencia con concepto: Luna de miel S&V'); return; }
    window.open(url, '_blank');
  }
}
