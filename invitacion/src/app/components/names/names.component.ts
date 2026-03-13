import { Component } from '@angular/core';
import { WeddingService } from '../../services/wedding.service';

@Component({
  selector: 'app-names',
  standalone: true,
  templateUrl: './names.component.html',
  styleUrl:    './names.component.scss'
})
export class NamesComponent {
  constructor(public wedding: WeddingService) {}
}
