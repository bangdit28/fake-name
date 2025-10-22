const CACHE_NAME = 'francegen-cache-v1';
const URLS_TO_CACHE = [
  '/',
  'index.html',
  'data.js',
  'icon-192x192.png',
  'icon-512x512.png'
];

// Installasi service worker dan caching file
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// Mengambil file dari cache jika tersedia
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
