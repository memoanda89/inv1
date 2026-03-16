
import { Component, inject } from '@angular/core';
import { WeddingConfigService } from '../../core/services/wedding-config.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
@Component({ selector:'app-dress-code', standalone:true, imports:[RevealDirective], templateUrl:'./dress-code.component.html', styleUrl:'./dress-code.component.scss' })
export class DressCodeComponent { cfg = inject(WeddingConfigService); }
