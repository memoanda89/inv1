
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeddingStateService } from '../../core/services/wedding-state.service';
import { WeddingConfigService } from '../../core/services/wedding-config.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
@Component({ selector:'app-predictions', standalone:true, imports:[FormsModule,RevealDirective], templateUrl:'./predictions.component.html', styleUrl:'./predictions.component.scss' })
export class PredictionsComponent {
  state = inject(WeddingStateService);
  cfg   = inject(WeddingConfigService);
  name  = ''; step = 0;
  start() { if (!this.name.trim()) { alert('Escribe tu nombre'); return; } this.state.setPredName(this.name.trim()); this.step=1; }
  pick(q:number, o:number) { this.state.pickAnswer(q,o); }
  isSel(q:number, o:number) { return this.state.predAnswers()[q]===o; }
  submit() { if (!this.state.allAnswered) { alert('Responde todas las preguntas'); return; } this.state.submitPredictions(); this.step=2; }
  pct(qi:number, oi:number) { const v=this.cfg.predictions[qi].demoVotes; return Math.round(v[oi]/v.reduce((a,b)=>a+b,0)*100); }
}
