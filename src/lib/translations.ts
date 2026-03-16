export type Lang = 'de' | 'en' | 'fr';

export const translations = {
  de: {
    // Navbar
    nav: {
      menu: 'Menü',
      restaurant: 'Restaurant',
      experience: 'Erlebnis',
      services: 'Services',
      about: 'Über Uns',
      openingHours: 'Öffnungszeiten',
      food: 'Speisen',
      menuCards: 'Speisekarten',
      events: 'Events',
      directions: 'Anfahrt',
    },
    // Speisekarten page
    speisekarten: {
      back: '← Zurück zur Startseite',
      showAll: 'Alle Karten anzeigen',
      all: 'Alle',
      tagline: 'Porto Cervo',
      title: 'Unsere Speisekarten',
      subtitle: 'Hier finden Sie unsere aktuellen Karten zum Anschauen und Herunterladen.',
      download: 'Download',
      tapToOpen: 'Zum Öffnen antippen',
      openMenu: 'Speisekarte öffnen',
      menus: {
        mittagstisch: {
          title: 'Mittagstisch',
          description: 'Täglich frische Mittagsgerichte – schnell, lecker und zu fairen Preisen.',
          button: 'Mittagstisch ansehen',
          cardDesc: 'Täglich wechselnde Mittagsgerichte – schnell, frisch und zu fairen Preisen.',
        },
        speisekarte: {
          title: 'Speisekarte',
          description: 'Unsere vollständige Karte mit Pizza, Pasta, Fleisch, Fisch und Desserts.',
          button: 'Speisekarte ansehen',
          cardDesc: 'Unsere vollständige Karte mit Pizza, Pasta, Fleisch- und Fischgerichten sowie Desserts.',
        },
        empfehlungskarte: {
          title: 'Empfehlungskarte',
          description: 'Unsere aktuellen Empfehlungen – saisonale Highlights und besondere Gerichte.',
          button: 'Empfehlungen ansehen',
          cardDesc: 'Unsere aktuellen Empfehlungen – saisonale Highlights und besondere Gerichte.',
        },
      },
      mainTitle: 'Unsere Speisekarten',
      mainSubtitle: 'Entdecken Sie unsere authentisch italienische Küche – von klassischen Mittagsgerichten bis hin zu unserer vollständigen Abendkarte.',
      footer: { home: 'Startseite', imprint: 'Impressum', privacy: 'Datenschutz' },
    },
  },
  en: {
    nav: {
      menu: 'Menu',
      restaurant: 'Restaurant',
      experience: 'Experience',
      services: 'Services',
      about: 'About Us',
      openingHours: 'Opening Hours',
      food: 'Food',
      menuCards: 'Menus',
      events: 'Events',
      directions: 'Directions',
    },
    speisekarten: {
      back: '← Back to Homepage',
      showAll: 'Show all menus',
      all: 'All',
      tagline: 'Porto Cervo',
      title: 'Our Menus',
      subtitle: 'Browse our current menus and download them.',
      download: 'Download',
      tapToOpen: 'Tap to open',
      openMenu: 'Open menu',
      menus: {
        mittagstisch: {
          title: 'Lunch Menu',
          description: 'Daily fresh lunch dishes – quick, delicious and at fair prices.',
          button: 'View Lunch Menu',
          cardDesc: 'Daily changing lunch dishes – quick, fresh and at fair prices.',
        },
        speisekarte: {
          title: 'À la Carte',
          description: 'Our full menu with pizza, pasta, meat, fish and desserts.',
          button: 'View Menu',
          cardDesc: 'Our complete menu with pizza, pasta, meat and fish dishes as well as desserts.',
        },
        empfehlungskarte: {
          title: 'Recommendations',
          description: 'Our current recommendations – seasonal highlights and special dishes.',
          button: 'View Recommendations',
          cardDesc: 'Our current recommendations – seasonal highlights and special dishes.',
        },
      },
      mainTitle: 'Our Menus',
      mainSubtitle: 'Discover our authentic Italian cuisine – from classic lunch dishes to our full evening menu.',
      footer: { home: 'Home', imprint: 'Imprint', privacy: 'Privacy Policy' },
    },
  },
  fr: {
    nav: {
      menu: 'Menu',
      restaurant: 'Restaurant',
      experience: 'Expérience',
      services: 'Services',
      about: 'À propos',
      openingHours: 'Horaires',
      food: 'Cuisine',
      menuCards: 'Cartes',
      events: 'Événements',
      directions: 'Accès',
    },
    speisekarten: {
      back: '← Retour à l\'accueil',
      showAll: 'Afficher toutes les cartes',
      all: 'Tout',
      tagline: 'Porto Cervo',
      title: 'Nos Cartes',
      subtitle: 'Consultez et téléchargez nos cartes actuelles.',
      download: 'Télécharger',
      tapToOpen: 'Appuyez pour ouvrir',
      openMenu: 'Ouvrir la carte',
      menus: {
        mittagstisch: {
          title: 'Menu du midi',
          description: 'Plats du jour frais – rapides, savoureux et à prix abordables.',
          button: 'Voir le menu du midi',
          cardDesc: 'Plats du jour changeants – rapides, frais et à prix équitables.',
        },
        speisekarte: {
          title: 'Carte',
          description: 'Notre carte complète avec pizzas, pâtes, viandes, poissons et desserts.',
          button: 'Voir la carte',
          cardDesc: 'Notre carte complète avec pizzas, pâtes, plats de viande et de poisson ainsi que desserts.',
        },
        empfehlungskarte: {
          title: 'Suggestions',
          description: 'Nos suggestions actuelles – spécialités saisonnières et plats particuliers.',
          button: 'Voir les suggestions',
          cardDesc: 'Nos suggestions actuelles – spécialités saisonnières et plats particuliers.',
        },
      },
      mainTitle: 'Nos Cartes',
      mainSubtitle: 'Découvrez notre cuisine italienne authentique – des classiques du midi à notre carte complète du soir.',
      footer: { home: 'Accueil', imprint: 'Mentions légales', privacy: 'Politique de confidentialité' },
    },
  },
};

export function t(lang: Lang, path: string): string {
  const keys = path.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let val: any = translations[lang];
  for (const k of keys) {
    val = val?.[k];
  }
  return typeof val === 'string' ? val : path;
}
