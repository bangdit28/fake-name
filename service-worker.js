// --- START OF FILE service-worker.js ---

const CACHE_NAME = 'name-generator-cache-v1';
const urlsToCache = [
  './index.html', 
  './manifest.json',
  './database-nama.js', // Sebaiknya tambahkan juga file database
  'https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@400;600;700&display=swap',
  'https://i.imgur.com/biPfr2r.png',
  './musik.mp3' // Ganti 'musik-keren.mp3' dengan nama file musik Anda
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache, adding URLs to cache');
        return cache.addAll(urlsToCache);
      })
  );
});

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
// --- END OF FILE service-worker.js ---
