import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { WeddingService } from '../../services/wedding.service';

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.component.html',
  styleUrl:    './countdown.component.scss'
})
export class CountdownComponent implements OnInit, OnDestroy {
  days    = signal('--');
  hours   = signal('--');
  minutes = signal('--');
  seconds = signal('--');
  tick    = signal(false);

  private timer = 0;
  constructor(private wedding: WeddingService) {}

  ngOnInit() {
    this.update();
    this.timer = window.setInterval(() => this.update(), 1000);
  }

  private update() {
    const diff = this.wedding.weddingDate.getTime() - Date.now();
    if (diff <= 0) return;
    const newSec = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
    if (newSec !== this.seconds()) {
      this.tick.set(false);
      setTimeout(() => this.tick.set(true), 10);
    }
    this.days.set(String(Math.floor(diff / 86400000)));
    this.hours.set(String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'));
    this.minutes.set(String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'));
    this.seconds.set(newSec);
  }

  ngOnDestroy() { clearInterval(this.timer); }
}
