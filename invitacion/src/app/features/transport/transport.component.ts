
import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
@Component({ selector:'app-transport', standalone:true, imports:[RevealDirective], templateUrl:'./transport.component.html', styleUrl:'./transport.component.scss' })
export class TransportComponent {
  items = [
    { ico:'🚌', route:'Shuttle de ida',     time:'4:00 PM', desc:'Salida desde Hotel Rosewood hacia la Hacienda. Punto de reunión: lobby principal.' },
    { ico:'🚌', route:'Shuttle de regreso', time:'1:30 AM', desc:'Regreso desde la Hacienda a los hoteles del centro. Último servicio de la noche.' },
    { ico:'🚗', route:'Auto propio',         time:'Estacionamiento', desc:'Estacionamiento gratuito con servicio de valet parking incluido.' },
  ];
}
