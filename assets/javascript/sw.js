const CACHE_NAME = 'STORIES_CACHE-v1';

self.addEventListener('install',async function () {
    //Save initial files
    const cache =  await caches.open(CACHE_NAME);
    cache.addAll(['/index.html','/dist/javascript/bundle.js',]);
})

self.addEventListener('activate',async function (ev) {
    const depuration = async ()=> {
        const cacheNames = await caches.keys();
        let promises = cacheNames.map(cacheName => {
            if(CACHE_NAME != cacheName){
                return caches.delete(cacheName);
            }
        })
        return Promise.all(promises);
    }
    ev.waitUntil(depuration());
})

self.addEventListener('fetch',function(ev){
    const finder = async ()=> {
        const response = await caches.match(ev.request);
        try{
            return searchInCacheOrMarkeRequest(ev.request);
        }catch(err){
            if(ev.request.mode == "navigate"){
                return caches.match(ev.request);
            }
        }
    }
    ev.respondWith(finder());
})

function searchInCacheOrMarkeRequest(request) {
    const cachePromise = caches.open(CACHE_NAME);
    const matchPromise = cachePromise.then(function (cache) {
        return cache.match(request);
    });
    return Promise.all([cachePromise,matchPromise]).then(function([cache,cacheResponse]) {
        const fetchPromise = fetch(request).then(function (fetchResponse) {
            cache.put(request,fetchResponse.clone());
            return fetchResponse;
        });
        return cacheResponse || fetchPromise;
    });
}