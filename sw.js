let CACHE_NAME = 'my-site-cache'

let urlsToCache = [

]

// alle elementer til at skabe appen skal caches

self.addEventListener('install', function(event) {

    event.waitUntil(
        caches.open(CACHE_NAME)

        .then(function(cache){
            console.log('Opened cache');
            return cache.addAll(urlsToCache)
        })
    )
})

self.addEventListener('fetch', function(e){
    console.log(`intercept req: `+e.request.url);

    
})