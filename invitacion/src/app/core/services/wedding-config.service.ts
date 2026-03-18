import { Injectable } from '@angular/core';
import {
  WeddingConfig, Song, Hotel, TimelineItem,
  FaqItem, Prediction, CapsuleMessage, Advice, GalleryPhoto, Gift
} from '../models/wedding.models';

/**
 * ╔══════════════════════════════════════════════════╗
 * ║   EDITA AQUÍ TODOS LOS DATOS DE LA BODA          ║
 * ║   Este es el único archivo que necesitas tocar   ║
 * ╚══════════════════════════════════════════════════╝
 */
@Injectable({ providedIn: 'root' })
export class WeddingConfigService {

  // ── Información principal ─────────────────────────────────────────────────
  readonly config: WeddingConfig = {
    groomName:    'Memo',
    brideName:    'Sandy',
    weddingDate:  new Date('2026-10-03T17:00:00'),
    venue:        'Hacienda Los Laureles',
    city:         'San Miguel de Allende, Gto.',
    time:         '5:00 PM',
    rsvpDeadline: '1° de Septiembre de 2026',
    mapEmbedUrl:  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.22!2d-100.7430!3d20.9145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b54a4cc80a7e9%3A0x5a1b4e2f3e1a9d2!2sSan%20Miguel%20de%20Allende!5e0!3m2!1ses!2smx!4v1700000000000',
    siteUrl:      'https://Sandy-memo.vercel.app',
  };

  // ── Nombres de los padres ─────────────────────────────────────────────────
  readonly parents = {
    groomFather: 'Papá de Memo',
    groomMother: 'Mamá de Memo',
    brideFather: 'Papá de Sandy',
    brideMother: 'Mamá de Sandy',
    groomMsg: 'Hoy entregamos a nuestro hijo con la certeza de que encontró a la persona con quien construir una vida llena de amor y alegría.',
    brideMsg: 'Con enorme alegría y gratitud, entregamos a nuestra hija sabiendo que estará en las mejores manos.',
  };

  // ── Galería demo (agrega tus fotos reales en assets/fotos/) ──────────────

  readonly photos = [
    { label: 'El día que nos conocimos',   icon: '♡', imageUrl: 'assets/fotos/foto-1.jpg' },
    { label: 'Los mejores momentos juntos', icon: '◆', imageUrl: 'assets/fotos/foto-2.jpg' },
    { label: 'Aventuras que vivimos',       icon: '✦', imageUrl: 'assets/fotos/foto-3.jpg' },
    { label: 'La propuesta más especial',   icon: '💍', imageUrl: 'assets/fotos/foto-1.jpg' },
    { label: 'Pronto... nuestra boda',      icon: '∞', imageUrl: 'assets/fotos/foto-2.jpg' },
  ];

  readonly bankAccount = {
    bank: 'BBVA México', holder: 'Sandy García',
    clabe: '012345678901234567', concept: 'Boda S&V',
  };

  readonly demoGallery: GalleryPhoto[] = [
    { id:1, emoji:'🌸', name:'María González', msg:'Los conocí en la universidad y supe que eran el uno para el otro desde el primer día. ¡Los quiero mucho!' ,imageUrl:'assets/fotos/foto-1.jpg'},
    { id:2, emoji:'💐', name:'Carlos Herrera',  msg:'Sandy es mi mejor amigo desde la prepa. memo, gracias por hacerlo tan feliz.' ,imageUrl:'assets/fotos/foto-2.jpg'},
    { id:3, emoji:'🥂', name:'Ana Martínez',    msg:'Fui testigo de su primer beso y hoy soy testigo de este momento tan especial.' ,imageUrl:'assets/fotos/foto-3.jpg'},
    { id:4, emoji:'📸', name:'Roberto García',  msg:'Ver a mi hijo tan feliz es el mejor regalo que la vida me pudo dar.' ,imageUrl:'assets/fotos/foto-1.jpg'},
  ];

  // ── Canciones demo para la playlist ──────────────────────────────────────
  readonly songs: Song[] = [
    { id:1,  name:'Perfect',                   artist:'Ed Sheeran',             dur:'4:23', emoji:'🎸', added:true,  by:'Sandy' },
    { id:2,  name:'Die With A Smile',           artist:'Lady Gaga & Bruno Mars', dur:'4:11', emoji:'🎤', added:true,  by:'memo' },
    { id:3,  name:'Golden Hour',                artist:'JVKE',                   dur:'3:26', emoji:'🎹', added:true,  by:'Sandy' },
    { id:4,  name:'A Thousand Years',           artist:'Christina Perri',        dur:'4:45', emoji:'🎵', added:true,  by:'Ana M.' },
    { id:5,  name:'Lover',                      artist:'Taylor Swift',            dur:'3:41', emoji:'🎵', added:false, by:'' },
    { id:6,  name:'All of Me',                  artist:'John Legend',             dur:'4:29', emoji:'🎹', added:false, by:'' },
    { id:7,  name:"Can't Help Falling in Love", artist:'Elvis Presley',           dur:'3:01', emoji:'🎸', added:false, by:'' },
    { id:8,  name:'La Vie en Rose',             artist:'Édith Piaf',              dur:'3:09', emoji:'🎻', added:false, by:'' },
    { id:9,  name:'Marry You',                  artist:'Bruno Mars',              dur:'3:50', emoji:'🎤', added:false, by:'' },
    { id:10, name:'Thinking Out Loud',          artist:'Ed Sheeran',              dur:'4:41', emoji:'🎸', added:false, by:'' },
    { id:11, name:'Bésame Mucho',               artist:'Andrea Bocelli',          dur:'3:20', emoji:'🎻', added:false, by:'' },
    { id:12, name:'Perfecta',                   artist:'Camilo',                  dur:'3:35', emoji:'🎤', added:false, by:'' },
    { id:13, name:'Me Enamoré',                 artist:'Shakira',                 dur:'3:48', emoji:'🎵', added:false, by:'' },
    { id:14, name:'Por Eso Te Quiero',          artist:'Juanes',                  dur:'3:55', emoji:'🎸', added:false, by:'' },
  ];

  // ── Predicciones ──────────────────────────────────────────────────────────
  readonly predictions: Prediction[] = [
    { question:'¿Quién llorará primero?',        options:['El novio 🤵','La novia 👰','La mamá de él 💐','La mamá de ella 🌸','El fotógrafo 📷'], demoVotes:[42,28,15,10,5] },
    { question:'¿A qué hora termina la fiesta?', options:['Antes de medianoche 🕚','A la 1:00 AM 🕐','3 AM o más 🌅','¡Amanecemos! ☀️'],         demoVotes:[18,38,32,12] },
    { question:'¿Qué canción rompe la pista?',   options:['Salsa o cumbia 💃','Reggaeton 🔥','Pop clásico 80s 🎸','Una ranchera 🇲🇽'],            demoVotes:[25,35,22,18] },
    { question:'¿Cuántos bailarán el vals?',     options:['Solo los novios 💑','La familia cercana','La mitad del salón','¡Todos! 🎉'],            demoVotes:[12,28,35,25] },
    { question:'¿Quién da el mejor discurso?',   options:['El papá de la novia 🥂','El mejor amigo 🤝','La mamá del novio 💝','El novio sorprende'], demoVotes:[20,32,28,20] },
  ];

  // ── Cápsula del tiempo — mensajes demo ────────────────────────────────────
  readonly demoCapsule: CapsuleMessage[] = [
    { name:'María González', date:'20 sept, 2025', text:'En un año van a leer esto y van a sonreír recordando lo nerviosos que estaban hoy.', type:'text' },
    { name:'Carlos Herrera', date:'20 sept, 2025', text:'Sandy, cuando leas esto ya llevas un año casado. Eres mi mejor amigo.',           type:'text' },
    { name:'Ana Martínez',   date:'20 sept, 2025', text:'memo, ¡lo lograste! Hoy empiezas la aventura más bonita de tu vida.',           type:'video' },
  ];

  // ── Consejos demo ─────────────────────────────────────────────────────────
  readonly demoAdvice: Advice[] = [
    { category:'Consejo de amor',       name:'María González',               text:'Nunca dejes de darte los buenos días con un beso. Las mañanas pequeñas construyen los años grandes.' },
    { category:'Consejo de matrimonio', name:'Roberto García, papá del novio', text:'Escúchense siempre. No para responder, sino para entender.' },
    { category:'Consejo de amor',       name:'Ana Martínez',                  text:'Ríanse juntos todos los días. La risa es el idioma secreto de las parejas felices.' },
  ];

  // ── Hoteles ───────────────────────────────────────────────────────────────
  readonly hotels: Hotel[] = [
    { name:'Rosewood San Miguel',   category:'Lujo',         price:'$$$$$', stars:5, distance:'5 min',  tip:'El más cercano. Vistas al Jardín Principal.',     url:'https://www.rosewoodhotels.com/es/san-miguel-de-allende' },
    { name:'Casa de Sierra Nevada', category:'Boutique',     price:'$$$$',  stars:5, distance:'8 min',  tip:'Histórico y romántico. Ideal para luna de miel.', url:'#' },
    { name:'Hotel Matilda',         category:'Design Hotel', price:'$$$',   stars:5, distance:'10 min', tip:'Moderno con rooftop pool.',                       url:'https://www.hotelmatilda.com' },
    { name:'Senda Boutique Hotel',  category:'Económico',    price:'$$',    stars:4, distance:'12 min', tip:'Excelente precio. Ideal para grupos.',            url:'#' },
  ];

  // ── Itinerario ────────────────────────────────────────────────────────────
  readonly timeline: TimelineItem[] = [
    { time:'4:30 PM',  title:'Recepción de Invitados', desc:'Bienvenida con cóctel y música en vivo en los jardines de la Hacienda' },
    { time:'5:00 PM',  title:'Ceremonia Civil',         desc:'En el salón principal de la Hacienda Los Laureles' },
    { time:'6:00 PM',  title:'Sesión de Fotos',         desc:'Novios y seres queridos en los jardines y fuente' },
    { time:'7:00 PM',  title:'Banquete',                desc:'Cena de 3 tiempos con menú de temporada y brindis especial' },
    { time:'9:00 PM',  title:'Baile y Fiesta',          desc:'Primera pieza, vals, y música para toda la noche' },
    { time:'11:00 PM', title:'Pastel & Sorpresas',      desc:'Corte del pastel y momentos especiales' },
    { time:'1:00 AM',  title:'Cierre de la Fiesta',     desc:'Despedida y traslado a los hoteles' },
  ];

  // ── FAQ ───────────────────────────────────────────────────────────────────
  readonly faq: FaqItem[] = [
    { q:'¿Cuál es el código de vestimenta?',     a:'Formal elegante. Damas: vestido largo o midi en tonos neutros. Caballeros: traje oscuro. Por favor evita el blanco puro.' },
    { q:'¿Hay estacionamiento?',                  a:'Sí, la Hacienda cuenta con estacionamiento gratuito y valet parking.' },
    { q:'¿La boda es pet friendly?',              a:'Por el bienestar de todos, pedimos que las mascotas se queden en casa.' },
    { q:'¿Habrá transporte / shuttle?',           a:'Sí. Shuttle de ida 4:00 PM y regreso 1:30 AM desde hoteles principales. Te enviamos detalles 2 semanas antes.' },
    { q:'¿A qué hora termina la recepción?',      a:'La recepción está planeada hasta la 1:00 AM.' },
    { q:'¿Habrá menú vegetariano o vegano?',      a:'Sí. Por favor indícalo al confirmar tu asistencia.' },
    { q:'¿El terreno es accesible?',              a:'La Hacienda tiene terreno empedrado. Recomendamos calzado cómodo. Hay rampas en las áreas principales.' },
    { q:'¿Cómo llego a San Miguel de Allende?',   a:'Aeropuerto del Bajío (BJX) en León, ~1.5h. Desde CDMX ~3h. Desde Querétaro ~1h.' },
  ];

    public gifts: Gift[] = [
    // Example data; replace with actual gift data
    {
      name: 'Example Gift 1',
      icon: '🎁',
      desc: 'Description of gift 1',
      linkUrl: 'https://example.com',
      linkLabel: 'Buy Now'
    },
    // Add more gifts as needed
  ];

  // ── Colores vestimenta ────────────────────────────────────────────────────
  readonly ladiesColors: string[]  = [];
  readonly ladiesLabels: string[]  = [];
  readonly gentsColors: string[]  = [];
  readonly gentsLabels: string[]  = [];
}
