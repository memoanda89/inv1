import { Component } from '@angular/core';
import { EnvelopeComponent }  from './components/envelope/envelope.component';
import { NamesComponent }     from './components/names/names.component';
import { ParallaxComponent }  from './components/parallax/parallax.component';
import { DetailsComponent }   from './components/details/details.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { MessageComponent }   from './components/message/message.component';
import { GalleryComponent }   from './components/gallery/gallery.component';
import { VenueComponent }     from './components/venue/venue.component';
import { GiftsComponent }     from './components/gifts/gifts.component';
import { RsvpComponent }      from './components/rsvp/rsvp.component';
import { FooterComponent }    from './components/footer/footer.component';
import { CanvasComponent }    from './components/canvas/canvas.component';
import { WeddingService }     from './services/wedding.service';
import { AsyncPipe }          from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    EnvelopeComponent, NamesComponent, ParallaxComponent,
    DetailsComponent, CountdownComponent, MessageComponent,
    GalleryComponent, VenueComponent, GiftsComponent,
    RsvpComponent, FooterComponent, CanvasComponent, AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public wedding: WeddingService) {}
}
