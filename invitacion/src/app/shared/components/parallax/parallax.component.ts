
import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-parallax',
  standalone: true,
  template: `
    <div class="par-wrap" [style.height.px]="height">
      <div class="par-bg" #bg
        [style.backgroundImage]="imageUrl ? 'url(' + imageUrl + ')' : ''"
        [style.backgroundColor]="fallback"></div>
      <div class="par-dim"></div>
      <div class="par-content"><ng-content></ng-content></div>
    </div>`,
  styles: [`
    :host { display:block; }
    .par-wrap{position:relative;width:100vw;margin-left:calc(-50vw + 50%);overflow:hidden;z-index:5;margin-top:60px;margin-bottom:60px}
    .par-bg{position:absolute;top:0;left:0;right:0;height:160%;background-size:cover;background-position:center;will-change:transform}
    .par-dim{position:absolute;inset:0;z-index:1;background:linear-gradient(to bottom,rgba(232,237,242,.52) 0%,rgba(232,237,242,.14) 45%,rgba(232,237,242,.52) 100%)}
    .par-content{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;text-align:center;z-index:2}
    @media(max-width:600px){.par-wrap{height:280px!important;margin-top:40px;margin-bottom:40px}}
  `],
})
export class ParallaxComponent implements AfterViewInit, OnDestroy {
  @Input() imageUrl = '';
  @Input() height   = 420;
  @Input() fallback = 'var(--bg2)';
  @ViewChild('bg') bgRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() { this.onScroll(); window.addEventListener('scroll', this.onScroll, { passive: true }); }
  readonly onScroll = () => {
    const bg = this.bgRef?.nativeElement;
    const wrap = bg?.parentElement;
    if (!bg || !wrap) return;
    const r = wrap.getBoundingClientRect();
    const ratio = (window.innerHeight - r.top) / (window.innerHeight + r.height);
    bg.style.transform = `translateY(${(ratio - .5) * 70}px)`;
  };
  ngOnDestroy() { window.removeEventListener('scroll', this.onScroll); }
}
