
import { Component, inject } from '@angular/core';
import { WeddingStateService }   from './core/services/wedding-state.service';
import { WeddingConfigService }  from './core/services/wedding-config.service';
import { EnvelopeComponent }     from './features/envelope/envelope.component';
import { CountdownComponent }    from './shared/components/countdown/countdown.component';
import { MusicPlayerComponent }  from './shared/components/music-player/music-player.component';
import { ParallaxComponent }     from './shared/components/parallax/parallax.component';
import { RevealDirective }       from './shared/directives/reveal.directive';
import { ParentsComponent }      from './features/parents/parents.component';
import { ItineraryComponent }    from './features/itinerary/itinerary.component';
import { DressCodeComponent }    from './features/dress-code/dress-code.component';
import { WeatherComponent }      from './features/weather/weather.component';
import { VenueComponent }        from './features/venue/venue.component';
import { GiftsComponent }        from './features/gifts/gifts.component';
import { HotelsComponent }       from './features/hotels/hotels.component';
import { RsvpComponent }         from './features/rsvp/rsvp.component';
import { PlaylistComponent }     from './features/playlist/playlist.component';
import { GalleryComponent }      from './features/gallery/gallery.component';
import { PredictionsComponent }  from './features/predictions/predictions.component';
import { CapsuleComponent }      from './features/capsule/capsule.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    EnvelopeComponent, CountdownComponent, MusicPlayerComponent,
    ParallaxComponent, RevealDirective,
    ParentsComponent, ItineraryComponent, DressCodeComponent,
    WeatherComponent, VenueComponent,
    GiftsComponent, HotelsComponent, RsvpComponent,
    PlaylistComponent, GalleryComponent, PredictionsComponent, CapsuleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl:    './app.component.scss',
})
export class AppComponent {
  state    = inject(WeddingStateService);
  cfg      = inject(WeddingConfigService);
  curSlide = 0;
  nextSlide() { this.curSlide = (this.curSlide + 1) % this.cfg.photos.length; }
  prevSlide() { this.curSlide = (this.curSlide - 1 + this.cfg.photos.length) % this.cfg.photos.length; }
}
