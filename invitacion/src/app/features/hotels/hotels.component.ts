
import { Component, inject } from '@angular/core';
import { WeddingConfigService } from '../../core/services/wedding-config.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
@Component({ selector:'app-hotels', standalone:true, imports:[RevealDirective], templateUrl:'./hotels.component.html', styleUrl:'./hotels.component.scss' })
export class HotelsComponent { cfg = inject(WeddingConfigService); }
