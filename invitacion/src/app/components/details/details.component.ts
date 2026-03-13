import { Component } from '@angular/core';
import { WeddingService } from '../../services/wedding.service';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrl:    './details.component.scss'
})
export class DetailsComponent {
  constructor(public wedding: WeddingService) {}
}
