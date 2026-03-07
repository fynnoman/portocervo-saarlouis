import { put, list } from '@vercel/blob';

const CONTENT_FILE = 'site-content.json';

export interface SiteContent {
  hero: {
    backgroundImage: string;
    subtitle: string;
    address: string;
    phone: string;
  };
  experience: {
    title: string;
    titleAccent: string;
    text: string;
    images: string[];
  };
  services: {
    title: string;
    items: { icon?: string; title: string; description: string }[];
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
  lunchMenu: {
    title: string;
    subtitle: string;
    categories: { icon: string; name: string; description: string }[];
  };
  events: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    offers: string[];
    occasions: string[];
  };
  liveEvents: {
    title: string;
    backgroundImage: string;
    items: { title: string; description: string; highlight?: string }[];
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
  experience: {
    title: 'Ein kulinarisches',
    titleAccent: 'Erlebnis',
    text: 'Genießen Sie authentische italienische Küche in elegantem Ambiente. Jedes Gericht wird mit Liebe und traditionellen Rezepten zubereitet.',
    images: [
      '/4CA6D974-904A-4932-9292-184FFF7A6D10_4_5005_c.jpeg',
      '/2FA51187-BAAE-41F4-8A97-2381397F7325.jpeg',
      '/597CB459-217A-4171-AB66-7D5696079126_1_105_c.jpeg',
      '/38672E83-BCEE-43FB-A910-89C6B2FB0008_1_105_c.jpeg',
      '/554794DF-3636-4A2D-856D-08360EE9F9C5.jpeg',
      '/C962BB62-838B-4A3D-8FFD-0C4142B7B563_1_105_c.jpeg',
      '/DCFC96B7-9A74-4723-8B60-C7362473FBE0_1_105_c.jpeg',
      '/6AE92497-B1FD-4998-BE03-EA2CA8C66CC7_1_105_c.jpeg',
    ],
  },
  services: {
    title: 'Unsere Serviceoptionen',
    items: [
      { title: 'Sitzplätze im Freien', description: 'Genießen Sie Ihr Essen in unserem schönen Außenbereich' },
      { title: 'Speisekarte für Kinder', description: 'Spezielle Gerichte für unsere kleinen Gäste' },
    ],
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
  lunchMenu: {
    title: 'Unsere Küche',
    subtitle: 'Von der Pizza bis zum Dessert – entdecken Sie die Vielfalt der italienischen Küche',
    categories: [
      { icon: '🍕', name: 'Pizza', description: 'Knuspriger Teig, frische Zutaten, traditionell im Steinofen gebacken' },
      { icon: '🍝', name: 'Pasta', description: 'Hausgemachte Nudeln nach authentischen italienischen Rezepten' },
      { icon: '🥗', name: 'Salate', description: 'Frische, knackige Salate mit mediterranem Dressing' },
      { icon: '🥩', name: 'Fleischgerichte', description: 'Zarte Fleischspezialitäten, meisterhaft zubereitet' },
      { icon: '🍰', name: 'Desserts', description: 'Süße Verführungen für den perfekten Abschluss' },
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
  liveEvents: {
    title: 'Veranstaltungen & Events',
    backgroundImage: '/631E3DF3-F04F-4DF0-814A-86EF4010F96A_1_201_a.jpeg',
    items: [
      { title: 'Live Musik', description: 'Genießen Sie regelmäßig Live-Musik in unserem Restaurant. Lassen Sie sich von italienischen Klängen verzaubern.' },
      { title: 'Italienischer Abend', description: 'Einmal im Monat verwandeln wir unser Restaurant in ein Stück Italien. Authentische Spezialitäten und besondere Atmosphäre.', highlight: 'Jeden ersten Freitag im Monat' },
      { title: 'Besondere Events', description: 'Von Weinverkostungen bis zu kulinarischen Themenabenden - erleben Sie italienische Kultur hautnah.' },
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
