const CACHE_NAME = "birthhub-pwa-v2.4.0";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=2.4.0",
  "./config.js?v=2.4.0",
  "./app.js?v=2.4.0",
  "./manifest.json",
  "./icons/icon-192.svg",
  "./icons/icon-512.svg",
  "./icons/icon-maskable.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // For external APIs/CDNs: network first, fallback to cache.
  if (url.origin !== self.location.origin) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // For app shell: cache first, fallback to network.
  event.respondWith(
    caches.match(request).then(cached =>
      cached || fetch(request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        return response;
      })
    )
  );
});
