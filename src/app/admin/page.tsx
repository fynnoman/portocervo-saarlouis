'use client';

import { useState, useRef } from 'react';

const MENUS = [
  {
    key: 'mittagstisch',
    label: 'Mittagstisch',
    description: 'Täglich frische Mittagsgerichte',
    icon: '🍝',
  },
  {
    key: 'speisekarte',
    label: 'Speisekarte',
    description: 'Vollständige Karte (Pizza, Pasta, Fleisch, Fisch)',
    icon: '📋',
  },
  {
    key: 'empfehlungskarte',
    label: 'Empfehlungskarte',
    description: 'Saisonale Empfehlungen & besondere Gerichte',
    icon: '⭐',
  },
];

type UploadState = 'idle' | 'uploading' | 'success' | 'error';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [uploadStates, setUploadStates] = useState<Record<string, UploadState>>({});
  const [uploadMessages, setUploadMessages] = useState<Record<string, string>>({});
  const [dragOver, setDragOver] = useState<string | null>(null);
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');

    const res = await fetch('/api/admin/files', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    setLoginLoading(false);
    if (res.ok) {
      setLoggedIn(true);
    } else {
      setLoginError('Falsches Passwort. Bitte erneut versuchen.');
    }
  };

  const handleUpload = async (key: string, file: File) => {
    if (!file || file.type !== 'application/pdf') {
      setUploadStates((s) => ({ ...s, [key]: 'error' }));
      setUploadMessages((s) => ({ ...s, [key]: 'Nur PDF-Dateien erlaubt.' }));
      return;
    }

    setUploadStates((s) => ({ ...s, [key]: 'uploading' }));
    setUploadMessages((s) => ({ ...s, [key]: '' }));

    const formData = new FormData();
    formData.append('password', password);
    formData.append('key', key);
    formData.append('file', file);

    const res = await fetch('/api/admin/upload', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setUploadStates((s) => ({ ...s, [key]: 'success' }));
      setUploadMessages((s) => ({ ...s, [key]: `✓ Erfolgreich hochgeladen: ${file.name}` }));
      setTimeout(() => {
        setUploadStates((s) => ({ ...s, [key]: 'idle' }));
      }, 4000);
    } else {
      const data = await res.json();
      setUploadStates((s) => ({ ...s, [key]: 'error' }));
      setUploadMessages((s) => ({ ...s, [key]: data.error || 'Fehler beim Hochladen.' }));
    }
  };

  const handleDrop = (key: string, e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(null);
    const file = e.dataTransfer.files[0];
    if (file) handleUpload(key, file);
  };

  const handleFileChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleUpload(key, file);
    // Reset input so same file can be uploaded again
    e.target.value = '';
  };

  // Login screen
  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="text-4xl mb-3">🍽️</div>
            <h1 className="text-2xl font-light text-gray-900 mb-1">Porto Cervo</h1>
            <p className="text-gray-500 text-sm">Verwaltung der Speisekarten</p>
          </div>

          <form onSubmit={handleLogin} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Passwort
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Passwort eingeben"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#c9a961] focus:border-transparent mb-4"
              autoFocus
            />
            {loginError && (
              <p className="text-red-500 text-sm mb-4">{loginError}</p>
            )}
            <button
              type="submit"
              disabled={loginLoading || !password}
              className="w-full bg-[#c9a961] hover:bg-[#b8963a] disabled:opacity-50 text-white py-3 rounded-xl font-medium transition-colors"
            >
              {loginLoading ? 'Wird geprüft...' : 'Anmelden'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Admin panel
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg font-medium text-gray-900">Porto Cervo – Speisekarten</h1>
            <p className="text-sm text-gray-500">PDF hochladen um eine Karte zu aktualisieren</p>
          </div>
          <button
            onClick={() => { setLoggedIn(false); setPassword(''); }}
            className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
          >
            Abmelden
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-4 mb-8 text-sm text-blue-700">
          <strong>So funktioniert es:</strong> Klicken Sie auf eine Karte oder ziehen Sie eine PDF-Datei
          in das entsprechende Feld. Die Karte wird sofort auf der Website aktualisiert.
        </div>

        <div className="flex flex-col gap-5">
          {MENUS.map((menu) => {
            const state = uploadStates[menu.key] || 'idle';
            const message = uploadMessages[menu.key];
            const isUploading = state === 'uploading';
            const isSuccess = state === 'success';
            const isError = state === 'error';

            return (
              <div
                key={menu.key}
                className={`bg-white rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                  dragOver === menu.key
                    ? 'border-[#c9a961] bg-[#fdf8ef]'
                    : isSuccess
                    ? 'border-green-400'
                    : isError
                    ? 'border-red-300'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onDragOver={(e) => { e.preventDefault(); setDragOver(menu.key); }}
                onDragLeave={() => setDragOver(null)}
                onDrop={(e) => handleDrop(menu.key, e)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{menu.icon}</span>
                      <div>
                        <h2 className="text-base font-semibold text-gray-900">{menu.label}</h2>
                        <p className="text-sm text-gray-500">{menu.description}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => fileInputRefs.current[menu.key]?.click()}
                      disabled={isUploading}
                      className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isUploading
                          ? 'bg-gray-100 text-gray-400 cursor-wait'
                          : isSuccess
                          ? 'bg-green-500 text-white'
                          : 'bg-[#c9a961] hover:bg-[#b8963a] text-white'
                      }`}
                    >
                      {isUploading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Lädt hoch...
                        </span>
                      ) : isSuccess ? (
                        '✓ Hochgeladen'
                      ) : (
                        'PDF auswählen'
                      )}
                    </button>

                    <input
                      ref={(el) => { fileInputRefs.current[menu.key] = el; }}
                      type="file"
                      accept="application/pdf"
                      className="hidden"
                      onChange={(e) => handleFileChange(menu.key, e)}
                    />
                  </div>

                  {/* Drag & Drop hint */}
                  {state === 'idle' && (
                    <div className="mt-4 border-2 border-dashed border-gray-200 rounded-xl py-4 text-center text-sm text-gray-400">
                      Oder PDF hier hineinziehen
                    </div>
                  )}

                  {/* Status message */}
                  {message && (
                    <p className={`mt-3 text-sm ${isSuccess ? 'text-green-600' : 'text-red-500'}`}>
                      {message}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-400 mt-10">
          Porto Cervo · Verwaltung · Nur für autorisierten Zugriff
        </p>
      </main>
    </div>
  );
}
