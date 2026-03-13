import {
  Component, Input, ElementRef, ViewChild,
  AfterViewInit, OnDestroy, HostListener
} from '@angular/core';

@Component({
  selector: 'app-parallax',
  standalone: true,
  templateUrl: './parallax.component.html',
  styleUrl:    './parallax.component.scss'
})
export class ParallaxComponent implements AfterViewInit, OnDestroy {
  /** URL de la imagen de fondo. Puede ser Unsplash o assets/fotos/foto.jpg */
  @Input() imageUrl = '';
  /** Alto del bloque en px (por defecto 420) */
  @Input() height = 420;

  @ViewChild('bg') bgRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.bgRef.nativeElement.style.backgroundImage = `url('${this.imageUrl}')`;
    this.onScroll();
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  readonly onScroll = () => {
    const wrap = this.bgRef?.nativeElement?.parentElement;
    const bg   = this.bgRef?.nativeElement;
    if (!wrap || !bg) return;
    const rect  = wrap.getBoundingClientRect();
    const ratio = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
    bg.style.transform = `translateY(${(ratio - 0.5) * 80}px)`;
  };

  ngOnDestroy() { window.removeEventListener('scroll', this.onScroll); }
}
