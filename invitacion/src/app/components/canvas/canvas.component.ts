import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ConfettiService } from '../../services/confetti.service';

@Component({
  selector: 'app-canvas',
  standalone: true,
  template: `
    <canvas #particles></canvas>
    <canvas #confetti></canvas>
    <div class="petals-wrap" #petalsWrap></div>
  `,
  styles: [`
    canvas { position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0; }
    canvas:last-of-type { z-index:9999; }
    .petals-wrap { position:fixed;inset:0;pointer-events:none;z-index:1;overflow:hidden; }
    :host ::ng-deep .petal {
      position:absolute;top:-40px;border-radius:50%;
      background:radial-gradient(circle,rgba(168,197,224,.65) 0%,rgba(91,141,184,.25) 100%);
      animation:fallPetal linear infinite;
    }
    @keyframes fallPetal {
      0%   { transform:translateY(0) rotate(0deg);opacity:0; }
      8%   { opacity:.7; }
      92%  { opacity:.2; }
      100% { transform:translateY(112vh) rotate(580deg);opacity:0; }
    }
  `]
})
export class CanvasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('particles') particlesRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('confetti')  confettiRef!:  ElementRef<HTMLCanvasElement>;
  @ViewChild('petalsWrap') petalsRef!: ElementRef<HTMLDivElement>;

  private animId = 0;
  private readonly colors = ['#a8c5e0','#5b8db8','#c8d8e8','#2d5a8e','#e8f0f7','#7a95b0'];

  constructor(private confettiSvc: ConfettiService) {}

  ngAfterViewInit() {
    this.confettiSvc.init(this.confettiRef.nativeElement);
    this.initPetals();
    this.initParticles();
    window.addEventListener('resize', this.onResize);
  }

  private initPetals() {
    const wrap = this.petalsRef.nativeElement;
    for (let i = 0; i < 22; i++) {
      const p = document.createElement('div');
      p.className = 'petal';
      const sz = 4 + Math.random() * 12;
      p.style.cssText = `left:${Math.random()*100}%;width:${sz}px;height:${sz}px;` +
        `animation-delay:${Math.random()*12}s;animation-duration:${9+Math.random()*9}s;opacity:${.15+Math.random()*.5};`;
      wrap.appendChild(p);
    }
  }

  private initParticles() {
    const canvas = this.particlesRef.nativeElement;
    const ctx = canvas.getContext('2d')!;
    canvas.width = innerWidth; canvas.height = innerHeight;

    const mkP = () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - .5) * .4, vy: -(0.2 + Math.random() * .6),
      c: this.colors[~~(Math.random() * this.colors.length)],
      sz: 1.5 + Math.random() * 3.5,
      rot: Math.random() * Math.PI * 2, rs: (Math.random() - .5) * .04,
      sh: ~~(Math.random() * 3), alpha: .1 + Math.random() * .35, life: Math.random()
    });
    let parts = Array.from({ length: 55 }, mkP);

    const draw = () => {
      this.animId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      parts = parts.map(p => {
        p.x += p.vx; p.y += p.vy; p.rot += p.rs; p.life += .0025;
        if (p.y < -10 || p.x < -10 || p.x > canvas.width + 10) return mkP();
        ctx.save();
        ctx.globalAlpha = p.alpha * Math.abs(Math.sin(p.life * Math.PI));
        ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillStyle = p.c;
        if (p.sh === 0) { ctx.beginPath(); ctx.arc(0, 0, p.sz, 0, Math.PI * 2); ctx.fill(); }
        else if (p.sh === 1) { ctx.beginPath(); ctx.moveTo(0,-p.sz); ctx.lineTo(p.sz,0); ctx.lineTo(0,p.sz); ctx.lineTo(-p.sz,0); ctx.closePath(); ctx.fill(); }
        else { ctx.fillRect(-p.sz/2, -p.sz/2, p.sz, p.sz * 1.4); }
        ctx.restore();
        return p;
      });
    };
    draw();
  }

  private onResize = () => {
    const c = this.particlesRef?.nativeElement;
    if (c) { c.width = innerWidth; c.height = innerHeight; }
  };

  ngOnDestroy() {
    cancelAnimationFrame(this.animId);
    window.removeEventListener('resize', this.onResize);
  }
}
