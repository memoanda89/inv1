
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeddingStateService } from '../../core/services/wedding-state.service';
import { ToastService } from '../../core/services/toast.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Song } from '../../core/models/wedding.models';
@Component({ selector:'app-playlist', standalone:true, imports:[FormsModule,RevealDirective], templateUrl:'./playlist.component.html', styleUrl:'./playlist.component.scss' })
export class PlaylistComponent {
  state = inject(WeddingStateService);
  toast = inject(ToastService);
  query   = '';
  results = signal<Song[]>([]);
  playlist = this.state.playlist;
  search() { this.results.set(this.state.searchSongs(this.query)); }
  promptAdd(s: Song) {
    const name = prompt('¿Cuál es tu nombre?',''); if (!name?.trim()) return;
    this.state.addSong(s.id, name.trim());
    this.results.update(r => r.map(x => x.id===s.id ? {...x,added:true,by:name} : x));
    this.toast.show(`🎵 "${s.name}" agregada`, 'var(--sp)');
  }
}
