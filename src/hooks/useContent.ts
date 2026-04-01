'use client';

import { useEffect, useState } from 'react';
import { SiteContent, DEFAULT_CONTENT } from '@/lib/content';

export function useContent() {
  const [content, setContent] = useState<SiteContent>(DEFAULT_CONTENT);

  useEffect(() => {
    fetch('/api/content', { cache: 'no-store' })
      .then((r) => r.json())
      .then((data) => {
        // Merge mit Defaults für Sicherheit
        setContent({
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
        });
      })
      .catch(() => {});
  }, []);

  return content;
}
