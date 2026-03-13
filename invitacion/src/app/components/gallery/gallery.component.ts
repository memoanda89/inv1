import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { WeddingService } from '../../services/wedding.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl:    './gallery.component.scss'
})
export class GalleryComponent implements OnInit, OnDestroy {
  readonly wedding = inject(WeddingService);
  readonly current = signal(0);
  private timer = 0;

  ngOnInit() {
    this.timer = window.setInterval(() => this.next(), 4500);
  }
  go(i: number) { this.current.set(i); }
  next() { this.current.set((this.current() + 1) % this.wedding.photos.length); }
  prev() { this.current.set((this.current() - 1 + this.wedding.photos.length) % this.wedding.photos.length); }
  ngOnDestroy() { clearInterval(this.timer); }
}
