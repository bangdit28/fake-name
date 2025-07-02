// --- START OF FILE service-worker.js ---

const CACHE_NAME = 'name-generator-cache-v1';
const urlsToCache = [
  './generator.html', // File utama
  './manifest.json', // File manifest
  'https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@400;600;700&display=swap', // Font
  'https://i.imgur.com/biPfr2r.png' // Logo
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
// --- END OF FILE service-worker.js ---
