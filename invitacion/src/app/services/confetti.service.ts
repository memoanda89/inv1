import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConfettiService {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private running = false;
  private readonly colors = [
    '#a8c5e0','#5b8db8','#c8d8e8','#2d5a8e','#e8f0f7','#7a95b0','#1e3a5f','#f0f5fa','#ffffff'
  ];

  init(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
  }

  launch(big = false) {
    if (this.running && big) return;
    this.running = true;
    this.canvas.width  = innerWidth;
    this.canvas.height = innerHeight;
    const count = big ? 300 : 220;
    const pieces = Array.from({ length: count }, () => ({
      x: Math.random() * this.canvas.width,
      y: big ? (-20 - Math.random() * 150) : (-20 - Math.random() * 250),
      vx: (Math.random() - .5) * (big ? 8 : 6),
      vy: big ? (2 + Math.random() * 6) : (1.5 + Math.random() * 5),
      c: this.colors[~~(Math.random() * this.colors.length)],
      w: big ? (7 + Math.random() * 11) : (5 + Math.random() * 9),
      h: big ? (4 + Math.random() * 6)  : (3 + Math.random() * 5),
      rot: Math.random() * Math.PI * 2,
      rs: (Math.random() - .5) * .22,
      wave: Math.random() * Math.PI * 2,
      ws: .04 + Math.random() * .06,
      wa: 1 + Math.random() * 4,
      circle: Math.random() < .3
    }));
    let frame = 0;
    const go = () => {
      frame++;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      let alive = false;
      for (const p of pieces) {
        if (p.y >= this.canvas.height + 30) continue;
        alive = true;
        p.y += p.vy; p.vy += .07;
        p.wave += p.ws; p.x += p.vx + Math.sin(p.wave) * p.wa; p.rot += p.rs;
        this.ctx.save();
        this.ctx.globalAlpha = Math.max(0, 1 - (p.y / this.canvas.height) * .55);
        this.ctx.translate(p.x, p.y); this.ctx.rotate(p.rot); this.ctx.fillStyle = p.c;
        if (p.circle) { this.ctx.beginPath(); this.ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2); this.ctx.fill(); }
        else { this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); }
        this.ctx.restore();
      }
      if (alive && frame < 400) requestAnimationFrame(go);
      else { this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); this.running = false; }
    };
    requestAnimationFrame(go);
  }
}
