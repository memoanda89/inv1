
import { Component, OnDestroy, ViewChild, ElementRef, signal, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-music-player',
  standalone: true,
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss',
})
export class MusicPlayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('audio') audioRef!: ElementRef<HTMLAudioElement>;
  playing   = signal(false);
  muted     = signal(false);
  volume    = signal(35);
  showPanel = signal(false);
  showHint  = signal(true);
  readonly src = 'assets/music/golden-hour.mp3';

  ngAfterViewInit() { setTimeout(() => this.showHint.set(false), 5000); }

  toggle() {
    const a = this.audioRef?.nativeElement; if (!a) return;
    if (this.playing()) { a.pause(); this.playing.set(false); this.showPanel.set(false); }
    else { a.volume = this.volume()/100; a.play().then(() => { this.playing.set(true); this.showPanel.set(true); }).catch(() => {}); }
  }
  toggleMute() { const a = this.audioRef?.nativeElement; if (!a) return; a.muted = !a.muted; this.muted.set(a.muted); }
  onVolume(e: Event) { const v = +(e.target as HTMLInputElement).value; this.volume.set(v); if (this.audioRef?.nativeElement) this.audioRef.nativeElement.volume = v/100; }
  ngOnDestroy() { this.audioRef?.nativeElement?.pause(); }
}
