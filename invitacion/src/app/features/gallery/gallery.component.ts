
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeddingStateService } from '../../core/services/wedding-state.service';
import { ToastService } from '../../core/services/toast.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { GalleryPhoto } from '../../core/models/wedding.models';
@Component({ selector:'app-gallery', standalone:true, imports:[FormsModule,RevealDirective], templateUrl:'./gallery.component.html', styleUrl:'./gallery.component.scss' })
export class GalleryComponent {
  state    = inject(WeddingStateService);
  toast    = inject(ToastService);
  gallery  = this.state.gallery;
  showForm = signal(false);
  selected = signal<GalleryPhoto|null>(null);
  name = ''; msg = '';
  showF() { this.showForm.set(true); }
  hideF() { this.showForm.set(false); this.name=''; this.msg=''; }
  submit() {
    if (!this.name.trim()||!this.msg.trim()) { alert('Por favor completa nombre y mensaje'); return; }
    this.state.addPhoto(this.name.trim(), this.msg.trim());
    this.toast.show('📸 ¡Tu recuerdo fue compartido!');
    this.hideF();
  }
  open(p:GalleryPhoto) { this.selected.set(p); }
  close() { this.selected.set(null); }
}
