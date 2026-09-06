// Minimal service worker. Its only job is to exist and handle fetch, which
// is one of the requirements browsers check before offering "Install app" —
// this app has no meaningful offline mode (coloring pages load from the
// network), so it deliberately doesn't cache anything; every request just
// passes straight through.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
