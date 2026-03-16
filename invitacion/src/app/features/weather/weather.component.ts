
import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
@Component({ selector:'app-weather', standalone:true, imports:[RevealDirective], templateUrl:'./weather.component.html', styleUrl:'./weather.component.scss' })
export class WeatherComponent {
  stats = [
    { ico:'🌡️', val:'17–25°C', lbl:'Rango' },
    { ico:'💧',  val:'65%',     lbl:'Humedad' },
    { ico:'🌬️', val:'14 km/h', lbl:'Viento' },
    { ico:'🌅',  val:'7:15 AM', lbl:'Amanecer' },
    { ico:'🌇',  val:'7:32 PM', lbl:'Atardecer' },
    { ico:'☔',  val:'20%',      lbl:'Lluvia' },
  ];
}
