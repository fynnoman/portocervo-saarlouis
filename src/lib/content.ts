import { put, list } from '@vercel/blob';

const CONTENT_FILE = 'site-content.json';

export interface SiteContent {
  hero: {
    backgroundImage: string;
    subtitle: string;
    address: string;
    phone: string;
  };
  about: {
    title: string;
    subtitle: string;
    intro: string;
    features: { icon: string; title: string; text: string }[];
  };
  openingHours: {
    rows: { day: string; hours: string }[];
  };
  events: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    offers: string[];
    occasions: string[];
  };
  restaurantImage: {
    image: string;
    heading: string;
  };
  footer: {
    address: string;
    city: string;
    phone: string;
    email: string;
  };
}

export const DEFAULT_CONTENT: SiteContent = {
  hero: {
    backgroundImage: '/A35107A5-F986-4680-A2F5-C34B2B38507A.png',
    subtitle: 'Italienische Küche in Saarlouis',
    address: 'Lothringer Str. 1, 66740 Saarlouis',
    phone: '06831 2747',
  },
  about: {
    title: 'Über Uns',
    subtitle: 'Tradition trifft auf Leidenschaft – Willkommen in unserem italienischen Restaurant',
    intro: 'Im Herzen von Saarlouis servieren wir authentische italienische Küche mit Liebe zum Detail und höchster Qualität.',
    features: [
      { icon: '🥬', title: 'Frische Zutaten', text: 'Wir verwenden nur die besten und frischesten Zutaten für unsere Gerichte' },
      { icon: '🍝', title: 'Italienische Tradition', text: 'Unsere Rezepte basieren auf authentischer italienischer Kochkunst' },
      { icon: '❤️', title: 'Mit Herz & Seele', text: 'Jedes Gericht wird mit Leidenschaft und Hingabe zubereitet' },
    ],
  },
  openingHours: {
    rows: [
      { day: 'Dienstag', hours: 'Geschlossen' },
      { day: 'Mittwoch', hours: '11:30–14:30, 18:00–22:00' },
      { day: 'Donnerstag', hours: '11:30–14:30, 18:00–22:00' },
      { day: 'Freitag', hours: '11:30–14:30, 18:00–22:00' },
      { day: 'Samstag', hours: '11:30–14:30, 18:00–22:00' },
      { day: 'Sonntag', hours: '11:30–14:30, 18:00–22:00' },
      { day: 'Montag', hours: '11:30–14:30, 18:00–22:00' },
    ],
  },
  events: {
    title: 'Feiern & Events',
    subtitle: 'Feiern Sie Ihre besonderen Momente in unserem Restaurant – wir sorgen für den perfekten Rahmen für Ihre Veranstaltung.',
    backgroundImage: '/3860D51A-1058-4810-9CBE-7C4FCBA95881.png',
    offers: [
      'Exklusive Raumgestaltung',
      'Individuelles Menü',
      'Professioneller Service',
      'Bis zu 60 Personen',
    ],
    occasions: [
      'Geburtstage & Jubiläen',
      'Hochzeiten & Verlobungen',
      'Firmenfeiern',
      'Weihnachtsfeiern',
    ],
  },
  restaurantImage: {
    image: '/CB84CBAC-E6CB-4FD3-B0CE-51D412FA2AF9_1_105_c.jpeg',
    heading: 'Unser Lokal',
  },
  footer: {
    address: 'Lothringer Str. 1',
    city: '66740 Saarlouis',
    phone: '06831 2747',
    email: 'portocervo.saarlouis@gmail.com',
  },
};

export async function getContent(): Promise<SiteContent> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return DEFAULT_CONTENT;
  try {
    const { blobs } = await list();
    const blob = blobs.find((b) => b.pathname === CONTENT_FILE);
    if (!blob) return DEFAULT_CONTENT;
    const res = await fetch(blob.url, { next: { revalidate: 60 } });
    if (!res.ok) return DEFAULT_CONTENT;
    return await res.json();
  } catch {
    return DEFAULT_CONTENT;
  }
}

export async function saveContent(content: SiteContent): Promise<void> {
  await put(CONTENT_FILE, JSON.stringify(content, null, 2), {
    access: 'public',
    allowOverwrite: true,
    contentType: 'application/json',
  });
}
