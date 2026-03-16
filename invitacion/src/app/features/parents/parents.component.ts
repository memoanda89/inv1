
import { Component, inject } from '@angular/core';
import { WeddingConfigService } from '../../core/services/wedding-config.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
@Component({ selector:'app-parents', standalone:true, imports:[RevealDirective], templateUrl:'./parents.component.html', styleUrl:'./parents.component.scss' })
export class ParentsComponent { cfg = inject(WeddingConfigService); }
