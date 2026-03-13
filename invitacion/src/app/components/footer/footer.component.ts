import { Component, inject } from '@angular/core';
import { WeddingService } from '../../services/wedding.service';
@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl:    './footer.component.scss'
})
export class FooterComponent {
  readonly wedding = inject(WeddingService);
}
