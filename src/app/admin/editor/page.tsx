'use client';

import { useState, useEffect, useRef } from 'react';
import { SiteContent, DEFAULT_CONTENT } from '@/lib/content';

const ADMIN_PASSWORD_KEY = 'admin_pw';

// ─── kleine Hilfskomponenten ────────────────────────────────────────────────

function Field({ label, value, onChange, multiline = false }: {
  label: string; value: string; onChange: (v: string) => void; multiline?: boolean;
}) {
  return (
    <div className="mb-4">
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{label}</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c9a961] resize-y"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c9a961]"
        />
      )}
    </div>
  );
}

function SectionCard({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="flex items-center gap-3 font-medium text-gray-800">
          <span className="text-xl">{icon}</span> {title}
        </span>
        <span className="text-gray-400 text-sm">{open ? '▲' : '▼'}</span>
      </button>
      {open && <div className="px-6 pb-6 border-t border-gray-100 pt-4">{children}</div>}
    </div>
  );
}

// ─── Image Upload Helper ─────────────────────────────────────────────────────
function ImageUpload({ label, value, onChange, password }: {
  label: string; value: string; onChange: (url: string) => void; password: string;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  const upload = async (file: File) => {
    if (!file.type.startsWith('image/')) { setError('Nur Bilder erlaubt.'); return; }
    setUploading(true); setError('');
    const fd = new FormData();
    fd.append('password', password);
    fd.append('file', file);
    fd.append('type', 'image');
    const res = await fetch('/api/admin/upload-image', { method: 'POST', body: fd });
    if (res.ok) { const d = await res.json(); onChange(d.url); }
    else { setError('Upload fehlgeschlagen.'); }
    setUploading(false);
  };

  return (
    <div className="mb-4">
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{label}</label>
      {value && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt="" className="w-full h-32 object-cover rounded-lg mb-2 border border-gray-200" />
      )}
      <div
        className="border-2 border-dashed border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:border-[#c9a961] transition-colors"
        onClick={() => ref.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) upload(f); }}
      >
        <input ref={ref} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) upload(f); e.target.value=''; }} />
        <p className="text-sm text-gray-400">{uploading ? 'Lädt hoch...' : 'Bild hier reinziehen oder klicken'}</p>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

// ─── Haupt-Komponente ────────────────────────────────────────────────────────
export default function AdminEditorPage() {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [content, setContent] = useState<SiteContent>(DEFAULT_CONTENT);
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  // Login prüfen
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin/files', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setLoggedIn(true);
      sessionStorage.setItem(ADMIN_PASSWORD_KEY, password);
      // Aktuellen Content laden
      loadContent();
    } else {
      setLoginError('Falsches Passwort.');
    }
  };

  const loadContent = () => {
    fetch('/api/content')
      .then(r => r.json())
      .then(data => setContent({
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
      }))
      .catch(() => {});
  };

  useEffect(() => {
    const saved = sessionStorage.getItem(ADMIN_PASSWORD_KEY);
    if (saved) {
      // Passwort verifizieren bevor auto-login
      fetch('/api/admin/files', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: saved }),
      }).then(res => {
        if (res.ok) {
          setPassword(saved);
          setLoggedIn(true);
          loadContent();
        } else {
          sessionStorage.removeItem(ADMIN_PASSWORD_KEY);
        }
      }).catch(() => {
        sessionStorage.removeItem(ADMIN_PASSWORD_KEY);
      });
    }
  }, []);

  const save = async () => {
    setSaveState('saving');
    try {
      const res = await fetch('/api/content/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, content }),
      });
      if (res.ok) {
        setSaveState('saved');
        setTimeout(() => setSaveState('idle'), 5000);
      } else {
        const data = await res.json().catch(() => ({}));
        console.error('Save error:', res.status, data);
        setSaveState('error');
        setTimeout(() => setSaveState('idle'), 4000);
        if (res.status === 401) {
          alert('Passwort ungültig. Bitte neu anmelden.');
          sessionStorage.removeItem(ADMIN_PASSWORD_KEY);
          setLoggedIn(false);
        } else {
          alert(`Fehler beim Speichern: ${data.error || res.statusText}`);
        }
      }
    } catch (err) {
      console.error('Save network error:', err);
      setSaveState('error');
      setTimeout(() => setSaveState('idle'), 4000);
      alert('Netzwerkfehler beim Speichern. Bitte Internetverbindung prüfen.');
    }
  };

  // Tiefes Merge-Helper
  const set = <K extends keyof SiteContent>(section: K, value: SiteContent[K]) =>
    setContent(prev => ({ ...prev, [section]: value }));

  // ─── Login Screen ─────────────────────────────────────────────────────────
  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="text-4xl mb-3">🍽️</div>
            <h1 className="text-2xl font-light text-gray-900 mb-1">Porto Cervo</h1>
            <p className="text-gray-500 text-sm">Website-Editor</p>
          </div>
          <form onSubmit={handleLogin} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Passwort</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
              placeholder="Passwort eingeben"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#c9a961] mb-4"
              autoFocus />
            {loginError && <p className="text-red-500 text-sm mb-4">{loginError}</p>}
            <button type="submit" disabled={!password}
              className="w-full bg-[#c9a961] hover:bg-[#b8963a] disabled:opacity-50 text-white py-3 rounded-xl font-medium transition-colors">
              Anmelden
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ─── Editor ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🍽️</span>
          <div>
            <p className="font-medium text-gray-900 text-sm">Website-Editor</p>
            <p className="text-xs text-gray-500">Porto Cervo · Änderungen werden nach ~30s live</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" target="_blank" className="text-sm text-gray-500 hover:text-[#c9a961] transition-colors hidden sm:block">
            Website ansehen →
          </a>
          <button onClick={save} disabled={saveState === 'saving'}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
              saveState === 'saved' ? 'bg-green-500 text-white' :
              saveState === 'error' ? 'bg-red-500 text-white' :
              'bg-[#c9a961] hover:bg-[#b8963a] text-white'
            }`}>
            {saveState === 'saving' ? 'Speichert...' : saveState === 'saved' ? '✓ Gespeichert! ~30s bis live' : saveState === 'error' ? 'Fehler!' : 'Speichern & Veröffentlichen'}
          </button>
          <button onClick={() => { sessionStorage.removeItem(ADMIN_PASSWORD_KEY); setLoggedIn(false); }}
            className="text-sm text-gray-400 hover:text-gray-700">Abmelden</button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-3 mb-6 text-sm text-blue-700">
          <strong>Hinweis:</strong> Klicken Sie nach Ihren Änderungen auf <strong>„Speichern & Veröffentlichen"</strong> — die Website wird innerhalb von ca. 30–60 Sekunden aktualisiert.
        </div>

        {/* HERO */}
        <SectionCard title="Startseite (Hero)" icon="🏠">
          <ImageUpload label="Hintergrundbild" value={content.hero.backgroundImage}
            onChange={v => set('hero', { ...content.hero, backgroundImage: v })} password={password} />
          <Field label="Untertitel" value={content.hero.subtitle} onChange={v => set('hero', { ...content.hero, subtitle: v })} />
          <Field label="Adresse" value={content.hero.address} onChange={v => set('hero', { ...content.hero, address: v })} />
          <Field label="Telefon" value={content.hero.phone} onChange={v => set('hero', { ...content.hero, phone: v })} />
        </SectionCard>

        {/* RESTAURANT BILD */}
        <SectionCard title="Unser Lokal (Bild)" icon="📸">
          <Field label="Überschrift" value={content.restaurantImage.heading}
            onChange={v => set('restaurantImage', { ...content.restaurantImage, heading: v })} />
          <ImageUpload label="Bild" value={content.restaurantImage.image}
            onChange={v => set('restaurantImage', { ...content.restaurantImage, image: v })} password={password} />
        </SectionCard>

        {/* ÜBER UNS */}
        <SectionCard title="Über Uns" icon="ℹ️">
          <Field label="Überschrift" value={content.about.title} onChange={v => set('about', { ...content.about, title: v })} />
          <Field label="Untertitel" value={content.about.subtitle} onChange={v => set('about', { ...content.about, subtitle: v })} multiline />
          <Field label="Einleitungstext" value={content.about.intro} onChange={v => set('about', { ...content.about, intro: v })} multiline />
          <div className="mt-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">3 Highlights</p>
            {content.about.features.map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 mb-3">
                <div className="flex gap-3">
                  <div className="w-20">
                    <label className="block text-xs text-gray-400 mb-1">Icon (Emoji)</label>
                    <input value={f.icon} onChange={e => {
                      const features = [...content.about.features];
                      features[i] = { ...f, icon: e.target.value };
                      set('about', { ...content.about, features });
                    }} className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-sm text-center" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs text-gray-400 mb-1">Titel</label>
                    <input value={f.title} onChange={e => {
                      const features = [...content.about.features];
                      features[i] = { ...f, title: e.target.value };
                      set('about', { ...content.about, features });
                    }} className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-sm" />
                  </div>
                </div>
                <div className="mt-2">
                  <label className="block text-xs text-gray-400 mb-1">Text</label>
                  <input value={f.text} onChange={e => {
                    const features = [...content.about.features];
                    features[i] = { ...f, text: e.target.value };
                    set('about', { ...content.about, features });
                  }} className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-sm" />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* ÖFFNUNGSZEITEN */}
        <SectionCard title="Öffnungszeiten" icon="🕐">
          {content.openingHours.rows.map((row, i) => (
            <div key={i} className="flex gap-3 mb-2">
              <input value={row.day} onChange={e => {
                const rows = [...content.openingHours.rows];
                rows[i] = { ...row, day: e.target.value };
                set('openingHours', { rows });
              }} placeholder="Tag" className="w-36 px-3 py-2 border border-gray-200 rounded-lg text-sm" />
              <input value={row.hours} onChange={e => {
                const rows = [...content.openingHours.rows];
                rows[i] = { ...row, hours: e.target.value };
                set('openingHours', { rows });
              }} placeholder="Zeiten (z.B. 11:30–14:30 oder Geschlossen)" className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm" />
            </div>
          ))}
        </SectionCard>

        {/* EVENTS */}
        <SectionCard title="Feiern & Events" icon="🎉">
          <Field label="Überschrift" value={content.events.title} onChange={v => set('events', { ...content.events, title: v })} />
          <Field label="Beschreibung" value={content.events.subtitle} onChange={v => set('events', { ...content.events, subtitle: v })} multiline />
          <ImageUpload label="Hintergrundbild" value={content.events.backgroundImage}
            onChange={v => set('events', { ...content.events, backgroundImage: v })} password={password} />
          <div className="mt-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Angebote (linke Spalte)</p>
            {content.events.offers.map((item, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input value={item} onChange={e => {
                  const offers = [...content.events.offers];
                  offers[i] = e.target.value;
                  set('events', { ...content.events, offers });
                }} className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm" />
                <button onClick={() => {
                  const offers = content.events.offers.filter((_, j) => j !== i);
                  set('events', { ...content.events, offers });
                }} className="text-red-400 hover:text-red-600 px-2 text-lg">✕</button>
              </div>
            ))}
            <button onClick={() => set('events', { ...content.events, offers: [...content.events.offers, ''] })}
              className="text-sm text-[#c9a961] hover:text-[#b8963a] mt-1">+ Angebot hinzufügen</button>
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Anlässe (rechte Spalte)</p>
            {content.events.occasions.map((item, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input value={item} onChange={e => {
                  const occasions = [...content.events.occasions];
                  occasions[i] = e.target.value;
                  set('events', { ...content.events, occasions });
                }} className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm" />
                <button onClick={() => {
                  const occasions = content.events.occasions.filter((_, j) => j !== i);
                  set('events', { ...content.events, occasions });
                }} className="text-red-400 hover:text-red-600 px-2 text-lg">✕</button>
              </div>
            ))}
            <button onClick={() => set('events', { ...content.events, occasions: [...content.events.occasions, ''] })}
              className="text-sm text-[#c9a961] hover:text-[#b8963a] mt-1">+ Anlass hinzufügen</button>
          </div>
        </SectionCard>

        {/* ERLEBNIS */}
        <SectionCard title="Das Erlebnis (Galerie)" icon="🖼️">
          <Field label="Überschrift" value={content.experience.title} onChange={v => set('experience', { ...content.experience, title: v })} />
          <Field label="Überschrift Akzent (Kursiv)" value={content.experience.titleAccent} onChange={v => set('experience', { ...content.experience, titleAccent: v })} />
          <Field label="Beschreibungstext" value={content.experience.text} onChange={v => set('experience', { ...content.experience, text: v })} multiline />
          <div className="mt-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Bilder</p>
            {content.experience.images.map((img, i) => (
              <div key={i} className="flex gap-2 items-start mb-3">
                <div className="flex-1">
                  <ImageUpload label={`Bild ${i + 1}`} value={img}
                    onChange={url => {
                      const images = [...content.experience.images];
                      images[i] = url;
                      set('experience', { ...content.experience, images });
                    }} password={password} />
                </div>
                <button onClick={() => {
                  const images = content.experience.images.filter((_, j) => j !== i);
                  set('experience', { ...content.experience, images });
                }} className="text-red-400 hover:text-red-600 px-2 text-lg mt-6">✕</button>
              </div>
            ))}
            <button onClick={() => set('experience', { ...content.experience, images: [...content.experience.images, ''] })}
              className="text-sm text-[#c9a961] hover:text-[#b8963a] mt-1">+ Bild hinzufügen</button>
          </div>
        </SectionCard>

        {/* SERVICES */}
        <SectionCard title="Unser Service" icon="⭐">
          <Field label="Überschrift" value={content.services.title} onChange={v => set('services', { ...content.services, title: v })} />
          <div className="mt-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Service-Punkte</p>
            {content.services.items.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 mb-3">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-xs text-gray-400 font-medium">Punkt {i + 1}</p>
                  <button onClick={() => {
                    const items = content.services.items.filter((_, j) => j !== i);
                    set('services', { ...content.services, items });
                  }} className="text-red-400 hover:text-red-600 text-sm">✕</button>
                </div>
                <div className="flex gap-3 mb-2">
                  <div className="w-20">
                    <label className="block text-xs text-gray-400 mb-1">Icon (Emoji)</label>
                    <input value={item.icon || ''} onChange={e => {
                      const items = [...content.services.items];
                      items[i] = { ...item, icon: e.target.value };
                      set('services', { ...content.services, items });
                    }} className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-sm text-center" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs text-gray-400 mb-1">Titel</label>
                    <input value={item.title} onChange={e => {
                      const items = [...content.services.items];
                      items[i] = { ...item, title: e.target.value };
                      set('services', { ...content.services, items });
                    }} className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Beschreibung</label>
                  <textarea value={item.description} onChange={e => {
                    const items = [...content.services.items];
                    items[i] = { ...item, description: e.target.value };
                    set('services', { ...content.services, items });
                  }} rows={2} className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-sm resize-none" />
                </div>
              </div>
            ))}
            <button onClick={() => set('services', { ...content.services, items: [...content.services.items, { icon: '✨', title: '', description: '' }] })}
              className="text-sm text-[#c9a961] hover:text-[#b8963a] mt-1">+ Service hinzufügen</button>
          </div>
        </SectionCard>

        {/* UNSERE KÜCHE */}
        <SectionCard title="Unsere Küche (Speisekategorien)" icon="🍽️">
          <Field label="Überschrift" value={content.lunchMenu.title} onChange={v => set('lunchMenu', { ...content.lunchMenu, title: v })} />
          <Field label="Untertitel" value={content.lunchMenu.subtitle} onChange={v => set('lunchMenu', { ...content.lunchMenu, subtitle: v })} />
          <div className="mt-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Kategorien</p>
            {content.lunchMenu.categories.map((cat, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 mb-3">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-xs text-gray-400 font-medium">Kategorie {i + 1}</p>
                  <button onClick={() => {
                    const categories = content.lunchMenu.categories.filter((_, j) => j !== i);
                    set('lunchMenu', { ...content.lunchMenu, categories });
                  }} className="text-red-400 hover:text-red-600 text-sm">✕</button>
                </div>
                <div className="flex gap-3 mb-2">
                  <div className="w-20">
                    <label className="block text-xs text-gray-400 mb-1">Icon (Emoji)</label>
                    <input value={cat.icon} onChange={e => {
                      const categories = [...content.lunchMenu.categories];
                      categories[i] = { ...cat, icon: e.target.value };
                      set('lunchMenu', { ...content.lunchMenu, categories });
                    }} className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-sm text-center" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs text-gray-400 mb-1">Name</label>
                    <input value={cat.name} onChange={e => {
                      const categories = [...content.lunchMenu.categories];
                      categories[i] = { ...cat, name: e.target.value };
                      set('lunchMenu', { ...content.lunchMenu, categories });
                    }} className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Beschreibung</label>
                  <textarea value={cat.description} onChange={e => {
                    const categories = [...content.lunchMenu.categories];
                    categories[i] = { ...cat, description: e.target.value };
                    set('lunchMenu', { ...content.lunchMenu, categories });
                  }} rows={2} className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-sm resize-none" />
                </div>
              </div>
            ))}
            <button onClick={() => set('lunchMenu', { ...content.lunchMenu, categories: [...content.lunchMenu.categories, { icon: '🍴', name: '', description: '' }] })}
              className="text-sm text-[#c9a961] hover:text-[#b8963a] mt-1">+ Kategorie hinzufügen</button>
          </div>
        </SectionCard>

        {/* VERANSTALTUNGEN (LiveEvents) */}
        <SectionCard title="Veranstaltungen & Events" icon="🎵">
          <Field label="Überschrift" value={content.liveEvents.title} onChange={v => set('liveEvents', { ...content.liveEvents, title: v })} />
          <ImageUpload label="Hintergrundbild" value={content.liveEvents.backgroundImage}
            onChange={v => set('liveEvents', { ...content.liveEvents, backgroundImage: v })} password={password} />
          <div className="mt-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Event-Einträge</p>
            {content.liveEvents.items.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 mb-3">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-xs text-gray-400 font-medium">Event {i + 1}</p>
                  <button onClick={() => {
                    const items = content.liveEvents.items.filter((_, j) => j !== i);
                    set('liveEvents', { ...content.liveEvents, items });
                  }} className="text-red-400 hover:text-red-600 text-sm">✕</button>
                </div>
                <label className="block text-xs text-gray-400 mb-1">Titel</label>
                <input value={item.title} onChange={e => {
                  const items = [...content.liveEvents.items];
                  items[i] = { ...item, title: e.target.value };
                  set('liveEvents', { ...content.liveEvents, items });
                }} className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-sm mb-2" />
                <label className="block text-xs text-gray-400 mb-1">Beschreibung</label>
                <textarea value={item.description} onChange={e => {
                  const items = [...content.liveEvents.items];
                  items[i] = { ...item, description: e.target.value };
                  set('liveEvents', { ...content.liveEvents, items });
                }} rows={2} className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-sm resize-none mb-2" />
                <label className="block text-xs text-gray-400 mb-1">Highlight (optional, z.B. &quot;Jeden ersten Freitag&quot;)</label>
                <input value={item.highlight || ''} onChange={e => {
                  const items = [...content.liveEvents.items];
                  items[i] = { ...item, highlight: e.target.value || undefined };
                  set('liveEvents', { ...content.liveEvents, items });
                }} className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-sm" />
              </div>
            ))}
            <button onClick={() => set('liveEvents', { ...content.liveEvents, items: [...content.liveEvents.items, { title: '', description: '' }] })}
              className="text-sm text-[#c9a961] hover:text-[#b8963a] mt-1">+ Event hinzufügen</button>
          </div>
        </SectionCard>

        {/* FOOTER / KONTAKT */}
        <SectionCard title="Kontakt & Footer" icon="📞">
          <Field label="Straße" value={content.footer.address} onChange={v => set('footer', { ...content.footer, address: v })} />
          <Field label="Ort" value={content.footer.city} onChange={v => set('footer', { ...content.footer, city: v })} />
          <Field label="Telefon" value={content.footer.phone} onChange={v => set('footer', { ...content.footer, phone: v })} />
          <Field label="E-Mail" value={content.footer.email} onChange={v => set('footer', { ...content.footer, email: v })} />
        </SectionCard>

        {/* SPEISEKARTEN */}
        <SectionCard title="Speisekarten (PDFs)" icon="📄">
          <p className="text-sm text-gray-500 mb-3">PDFs können direkt im <a href="/admin" className="text-[#c9a961] underline">Speisekarten-Bereich</a> hochgeladen werden.</p>
        </SectionCard>

        <div className="flex justify-end mt-6 pb-12">
          <button onClick={save} disabled={saveState === 'saving'}
            className={`px-8 py-3 rounded-xl font-medium transition-all ${
              saveState === 'saved' ? 'bg-green-500 text-white' :
              saveState === 'error' ? 'bg-red-500 text-white' :
              'bg-[#c9a961] hover:bg-[#b8963a] text-white'
            }`}>
            {saveState === 'saving' ? 'Speichert...' : saveState === 'saved' ? '✓ Gespeichert! ~30s bis live' : 'Speichern & Veröffentlichen'}
          </button>
        </div>
      </main>
    </div>
  );
}
