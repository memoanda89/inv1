
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

interface Petal { left:string; size:string; br:string; bg:string; dur:string; delay:string; blur:string; }

@Component({
  selector: 'app-petals',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="petals-wrap">
      <div class="petal" *ngFor="let p of petals"
        [style.left]="p.left" [style.width]="p.size" [style.height]="p.size"
        [style.borderRadius]="p.br" [style.background]="p.bg"
        [style.animationDuration]="p.dur" [style.animationDelay]="p.delay"
        [style.filter]="p.blur"></div>
    </div>`,
  styles: [`.petals-wrap{position:fixed;inset:0;pointer-events:none;z-index:1;overflow:hidden}
    .petal{position:absolute;top:-60px;animation:petalFall linear infinite;opacity:0}`]
})
export class PetalsComponent implements OnInit {
  petals: Petal[] = [];
  private colors = [
    'rgba(176,196,216,.55)','rgba(200,169,110,.3)',
    'rgba(242,245,248,.7)','rgba(122,154,184,.4)','rgba(208,218,228,.6)',
  ];
  ngOnInit() {
    this.petals = Array.from({ length: 22 }, () => {
      const s = 6 + Math.random() * 14;
      const round = Math.random() > .4;
      return {
        left:  Math.random()*100 + '%',
        size:  s + 'px',
        br:    round ? '50%' : '40% 60% 60% 40%',
        bg:    this.colors[Math.floor(Math.random()*this.colors.length)],
        dur:   (10 + Math.random()*14) + 's',
        delay: (Math.random()*12) + 's',
        blur:  Math.random() > .7 ? 'blur(1px)' : 'none',
      };
    });
  }
}
