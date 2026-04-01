import contentJson from '../../content.json';

const GITHUB_OWNER = 'fynnoman';
const GITHUB_REPO = 'portocervo-saarlouis';
const CONTENT_PATH = 'content.json';
const BRANCH = 'main';

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

// Content wird direkt aus der JSON-Datei im Repo gelesen (0 API-Calls)
export function getContent(): SiteContent {
  const data = contentJson as Partial<SiteContent>;
  return {
    ...DEFAULT_CONTENT,
    ...data,
    hero: { ...DEFAULT_CONTENT.hero, ...data.hero },
    experience: { ...DEFAULT_CONTENT.experience, ...data.experience },
    services: { ...DEFAULT_CONTENT.services, ...data.services },
    about: { ...DEFAULT_CONTENT.about, ...data.about },
    openingHours: { ...DEFAULT_CONTENT.openingHours, ...data.openingHours },
    lunchMenu: { ...DEFAULT_CONTENT.lunchMenu, ...data.lunchMenu },
    events: { ...DEFAULT_CONTENT.events, ...data.events },
    liveEvents: { ...DEFAULT_CONTENT.liveEvents, ...data.liveEvents },
    restaurantImage: { ...DEFAULT_CONTENT.restaurantImage, ...data.restaurantImage },
    footer: { ...DEFAULT_CONTENT.footer, ...data.footer },
  };
}

// Content wird über GitHub API ins Repo committet → Vercel deployed automatisch neu
export async function saveContent(content: SiteContent): Promise<void> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN nicht konfiguriert.');

  // 1. Aktuelle Datei-Info holen (für SHA)
  const getRes = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${CONTENT_PATH}?ref=${BRANCH}`,
    { headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json' } }
  );

  let sha: string | undefined;
  if (getRes.ok) {
    const data = await getRes.json();
    sha = data.sha;
  }

  // 2. Datei updaten via GitHub API
  const body = JSON.stringify({
    message: 'update: website content via admin editor',
    content: Buffer.from(JSON.stringify(content, null, 2)).toString('base64'),
    sha,
    branch: BRANCH,
  });

  const putRes = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${CONTENT_PATH}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body,
    }
  );

  if (!putRes.ok) {
    const err = await putRes.json().catch(() => ({}));
    throw new Error(`GitHub API Fehler: ${err.message || putRes.statusText}`);
  }
}
