import { Injectable, signal, computed, inject } from '@angular/core';
import { Song, GalleryPhoto, CapsuleMessage, Advice } from '../models/wedding.models';
import { WeddingConfigService } from './wedding-config.service';

@Injectable({ providedIn: 'root' })
export class WeddingStateService {
  private cfg = inject(WeddingConfigService);

  // ── Envelope ──────────────────────────────────────────────────────────────
  readonly isOpen = signal(false);
  open() { this.isOpen.set(true); }

  // ── RSVP ─────────────────────────────────────────────────────────────────
  readonly rsvp = signal<'yes' | 'no' | null>(null);
  confirmRsvp(yes: boolean) { this.rsvp.set(yes ? 'yes' : 'no'); }

  // ── Songs / Playlist ──────────────────────────────────────────────────────
  readonly songs    = signal<Song[]>(this.cfg.songs.map(s => ({ ...s })));
  readonly playlist = computed(() => this.songs().filter(s => s.added));

  addSong(id: number, by: string) {
    this.songs.update(list => list.map(s => s.id === id ? { ...s, added: true, by } : s));
  }
  searchSongs(q: string): Song[] {
    if (!q.trim()) return [];
    const lq = q.toLowerCase();
    return this.songs().filter(s =>
      s.name.toLowerCase().includes(lq) || s.artist.toLowerCase().includes(lq)
    );
  }

  // ── Gallery ───────────────────────────────────────────────────────────────
  readonly gallery = signal<GalleryPhoto[]>(this.cfg.demoGallery.map(p => ({ ...p })));

  addPhoto(name: string, msg: string, imageUrl?: string) {
    const id = Date.now();
    this.gallery.update(g => [{ id, emoji: '✨', name, msg, imageUrl }, ...g]);
  }

  // ── Predictions ───────────────────────────────────────────────────────────
  readonly predName    = signal('');
  readonly predAnswers = signal<number[]>(Array(5).fill(-1));
  readonly predDone    = signal(false);

  setPredName(n: string) { this.predName.set(n); }
  pickAnswer(q: number, opt: number) {
    this.predAnswers.update(a => a.map((v, i) => i === q ? opt : v));
  }
  submitPredictions() { this.predDone.set(true); }
  get allAnswered() { return this.predAnswers().every(a => a >= 0); }

  // ── Capsule ───────────────────────────────────────────────────────────────
  readonly capsule = signal<CapsuleMessage[]>(this.cfg.demoCapsule.map(m => ({ ...m })));

  addCapsuleMsg(name: string, text: string) {
    this.capsule.update(m => [{ name, date: 'hoy', text, type: 'text' as const }, ...m]);
  }

  // ── Advice ────────────────────────────────────────────────────────────────
  readonly advice = signal<Advice[]>(this.cfg.demoAdvice.map(a => ({ ...a })));

  addAdvice(category: string, name: string, text: string) {
    this.advice.update(a => [{ category, name, text }, ...a]);
  }
}
