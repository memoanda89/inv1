import { Injectable, signal } from '@angular/core';

export interface PhotoSlide {
  label: string;
  icon: string;
  imageUrl?: string;   // 'assets/fotos/foto1.jpg'
}
export interface GiftOption {
  icon: string; name: string; description: string;
  linkLabel: string; linkUrl: string;
}
export interface BankAccount {
  bank: string; holder: string; clabe: string; concept: string;
}

@Injectable({ providedIn: 'root' })
export class WeddingService {

  /* ── Personaliza aquí todos los datos de la boda ── */
  readonly groomName   = 'Sandy';
  readonly brideName   = 'Memo';
  readonly weddingDate = new Date('2025-09-20T17:00:00');
  readonly venue       = 'Hacienda Los Laureles';
  readonly city        = 'San Miguel de Allende, Gto.';
  readonly time        = '5:00 PM';
  readonly rsvpDeadline = '1° de Agosto';

  readonly photos: PhotoSlide[] = [
    { label: 'El día que nos conocimos',   icon: '♡' },
    { label: 'Los mejores momentos juntos', icon: '◆' },
    { label: 'Aventuras que vivimos',       icon: '✦' },
    { label: 'La propuesta más especial',   icon: '💍' },
    { label: 'Pronto... nuestra boda',      icon: '∞' },
  ];

  readonly gifts: GiftOption[] = [
    {
      icon: '🎁', name: 'Liverpool',
      description: 'Mesa registrada con artículos para nuestro nuevo hogar',
      linkLabel: 'Ver mesa →', linkUrl: 'https://www.liverpool.com.mx'
    },
    {
      icon: '💳', name: 'Transferencia',
      description: 'Si prefieres un regalo en efectivo para nuestra luna de miel',
      linkLabel: 'Ver cuenta →', linkUrl: '#account'
    },
    {
      icon: '✈️', name: 'Luna de Miel',
      description: 'Contribuye a nuestro viaje soñado a Italia y Grecia',
      linkLabel: 'Contribuir →', linkUrl: '#honeymoon'
    },
  ];

  readonly bankAccount: BankAccount = {
    bank: 'BBVA México', holder: 'Santiago García',
    clabe: '012345678901234567', concept: 'Boda S&V'
  };

  /* ── Estado ── */
  readonly envelopeOpened = signal(false);
  open() { this.envelopeOpened.set(true); }
}
