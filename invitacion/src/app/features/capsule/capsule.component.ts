
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeddingStateService } from '../../core/services/wedding-state.service';
import { ToastService } from '../../core/services/toast.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
@Component({ selector:'app-capsule', standalone:true, imports:[FormsModule,RevealDirective], templateUrl:'./capsule.component.html', styleUrl:'./capsule.component.scss' })
export class CapsuleComponent {
  state = inject(WeddingStateService);
  toast = inject(ToastService);
  tab   = signal<'text'|'video'>('text');
  msgs  = this.state.capsule;
  name  = ''; msg = '';
  submit() {
    if (!this.name.trim()||!this.msg.trim()) { alert('Completa nombre y mensaje'); return; }
    this.state.addCapsuleMsg(this.name.trim(), this.msg.trim());
    this.name=''; this.msg='';
    this.toast.show('⏳ ¡Mensaje sellado!');
  }
}
