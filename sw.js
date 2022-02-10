let CACHE_NAME = 'my-site-cache'

let urlsToCache = [

]

// alle elementer til at skabe appen skal caches

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('static').then(function (cache) {
            return cache.addAll([

                index.html,
                index.js,
                info.html,
                manifest.json,
                sw.js,
                assets/css/main.css,
                assets/img/icons/dog-icon-72px.png,
                assets/img/icons/dog-icon-128px.png,
                assets/img/icons/dog-icon-192px.png,
                assets/img/Hund.jpg,
                // etc,
                // etc
            ]);
        }),
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      }),
    );
  });