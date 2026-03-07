'use client';

import { useEffect, useState } from 'react';
import { SiteContent, DEFAULT_CONTENT } from '@/lib/content';

export function useContent() {
  const [content, setContent] = useState<SiteContent>(DEFAULT_CONTENT);

  useEffect(() => {
    fetch('/api/content')
      .then((r) => r.json())
      .then((data) => setContent(data))
      .catch(() => {});
  }, []);

  return content;
}
