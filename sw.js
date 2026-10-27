const CACHE_NAME = 'eng-coach-v13';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './english-g8-s1.html',
  './english-g8-s2.html',
  './english-g8-s3.html',
  './english-g8-s4.html',
  './english-g8-s5.html',
  './english-g8-s6.html',
  './english-g8-s7.html',
  './english-g8-s8.html',
  './english-g8-s9.html',
  './english-g8-s10.html',
  './english-g8-s11.html',
  './english-g8-s12.html',
  './english-g8-s13.html',
  './english-g8-s14.html',
  './english-g8-s15.html',
  './english-g8-s16.html',
  './english-g8-s17.html',
  './english-g8-s18.html',
  './english-g8-s19.html',
  './english-g8-s20.html',
  './english-g8-s21.html',
  './english-g8-s22.html',
  './english-g8-s23.html',
  './english-g8-s24.html',
  './english-g8-s25.html',
  './english-g8-s26.html',
  './english-g8-s27.html',
  './english-g8-s28.html',
  './english-g8-s29.html',
  './english-g8-s30.html',
  './logo.jpg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Network-First strategy to ensure user gets latest code update
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return networkResponse;
      })
      .catch(() => caches.match(event.request))
  );
});
