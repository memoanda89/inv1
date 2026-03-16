// ╔══════════════════════════════════════════╗
// ║   Todos los modelos de la invitación     ║
// ╚══════════════════════════════════════════╝

export interface WeddingConfig {
  groomName:    string;
  brideName:    string;
  weddingDate:  Date;
  venue:        string;
  city:         string;
  time:         string;
  rsvpDeadline: string;
  mapEmbedUrl:  string;
  siteUrl:      string;
}

export interface Song {
  id:     number;
  name:   string;
  artist: string;
  dur:    string;
  emoji:  string;
  added:  boolean;
  by:     string;
}

export interface GalleryPhoto {
  id:       number;
  emoji:    string;
  name:     string;
  msg:      string;
  imageUrl?: string;
}

export interface Prediction {
  question: string;
  options:  string[];
  demoVotes: number[];
}

export interface CapsuleMessage {
  name: string;
  date: string;
  text: string;
  type: 'text' | 'video';
}

export interface Advice {
  category: string;
  name:     string;
  text:     string;
}

export interface Hotel {
  name:     string;
  category: string;
  price:    string;
  stars:    number;
  distance: string;
  tip:      string;
  url:      string;
}

export interface TimelineItem {
  time:  string;
  title: string;
  desc:  string;
}

export interface FaqItem {
  q: string;
  a: string;
}
export interface Gift {
  name: string;
  icon: string;
  desc: string;
  linkUrl: string;
  linkLabel: string;
}
