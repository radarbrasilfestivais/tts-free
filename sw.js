const V='voz-livre-v2',F=['./','index.html','vendor/mespeak.js','vendor/lame.min.js','vendor/mespeak_config.json','voices/pt.json','voices/pt-pt.json','voices/es.json','voices/en-us.json','voices/it.json','voices/fr.json','voices/de.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(F)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
