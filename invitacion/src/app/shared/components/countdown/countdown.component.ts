
import { Component, Input, OnInit, OnDestroy, signal } from '@angular/core';
@Component({
  selector: 'app-countdown',
  standalone: true,
  template: `
    <div class="cd-wrap">
      <div class="cd-ttl">Faltan...</div>
      <div class="cd-grid">
        <div class="cd-box"><div class="cd-num" [class.tick]="tick()">{{days()}}</div><div class="cd-lbl">Días</div></div>
        <span class="cd-sep">:</span>
        <div class="cd-box"><div class="cd-num">{{hours()}}</div><div class="cd-lbl">Horas</div></div>
        <span class="cd-sep">:</span>
        <div class="cd-box"><div class="cd-num">{{mins()}}</div><div class="cd-lbl">Min</div></div>
        <span class="cd-sep">:</span>
        <div class="cd-box"><div class="cd-num">{{secs()}}</div><div class="cd-lbl">Seg</div></div>
      </div>
    </div>`,
  styles: [`
    .cd-wrap{margin:36px 0;text-align:center}
    .cd-ttl{font-family:'Cinzel',serif;font-size:8px;letter-spacing:6px;color:var(--slate);opacity:.75;text-transform:uppercase;margin-bottom:20px}
    .cd-grid{display:flex;align-items:center;justify-content:center;gap:8px}
    .cd-box{text-align:center;padding:16px 18px;background:var(--ice);border:1px solid var(--bg3);min-width:76px;box-shadow:0 2px 12px rgba(74,107,138,.07)}
    .cd-num{font-family:'Cinzel',serif;font-size:32px;font-weight:700;color:var(--deep);line-height:1}
    .cd-num.tick{animation:tickAnim .28s ease}
    .cd-lbl{font-family:'Cinzel',serif;font-size:7px;letter-spacing:3px;color:var(--gold);opacity:.75;text-transform:uppercase;margin-top:5px}
    .cd-sep{font-size:20px;color:var(--gold);opacity:.45;margin-bottom:18px}
  `]
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input({ required: true }) target!: Date;
  days = signal('--'); hours = signal('--'); mins = signal('--'); secs = signal('--');
  tick = signal(false);
  private timer = 0;
  ngOnInit() { this.update(); this.timer = window.setInterval(() => this.update(), 1000); }
  private update() {
    const diff = this.target.getTime() - Date.now();
    if (diff <= 0) return;
    const ns = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
    if (ns !== this.secs()) { this.tick.set(false); setTimeout(() => this.tick.set(true), 10); }
    this.days.set(String(Math.floor(diff / 86400000)));
    this.hours.set(String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'));
    this.mins.set(String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'));
    this.secs.set(ns);
  }
  ngOnDestroy() { clearInterval(this.timer); }
}
